import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Card } from '../models/card';

@Injectable({
  providedIn: 'root',
})
export class CardService {

private url = 'localhost:3000/';

  constructor(private http: HttpClient) { }

  getAllCards() {
    return this.http.get(this.url + 'getCards');
  }

}
