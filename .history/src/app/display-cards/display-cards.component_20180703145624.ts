import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { CardService } from '../services/card.service';
import { Card } from '../models/card';

@Component({
  selector: 'app-display-cards',
  templateUrl: './display-cards.component.html',
  styleUrls: ['./display-cards.component.css'],
    providers: [
    CardService
  ]
})
export class DisplayCardsComponent implements OnInit {
  cards;
  constructor(
    private cardService: CardService,
    private location: Location
  ) { }

  ngOnInit() {
    this.showAllCards();
  }

  showAllCards() {
    this.cardService
      .getAllCards()
      .subscribe((data: Card) => (this.cards = data));
  }

  deleteCard(id) {
    this.cardService.deleteCard(id).subscribe();
    console.log(id);
  }

  refreshPage() {
      location.reload();
  }
}
