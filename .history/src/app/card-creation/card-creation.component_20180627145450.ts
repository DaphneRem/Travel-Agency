import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';
import { Card } from '../models/card';

@Component({
  selector: 'app-card-creation',
  templateUrl: './card-creation.component.html',
  styleUrls: ['./card-creation.component.css'],
  providers: [
    CardService
  ]
})
export class CardCreationComponent implements OnInit {
  cards;

  constructor( private cardService: CardService) { }

  ngOnInit() {
  }

  showAllCards() {
    this.cardService
      .getAllCards()
      .subscribe((data: Card) => (this.cards = { ...data }));
  }
}
