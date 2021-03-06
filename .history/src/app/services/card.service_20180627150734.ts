import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Card } from '../models/card';

@Injectable({
  providedIn: 'root',
})
export class CardService {

private url = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getAllCards() {
    return this.http.get(this.url + 'getCards');
  }

  addHero(card: Card): Observable<Card> {
  return this.http.post<Card>(this.url + 'adddCard', card)
    .pipe(
      catchError(this.handleError('addHero', card))
    );
}

private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened; please try again later.');
};

}
