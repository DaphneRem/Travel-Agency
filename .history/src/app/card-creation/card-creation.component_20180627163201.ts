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
  newCard: Card;
  previewCard: boolean;
  addCArd: boolean;

  constructor( private cardService: CardService) { }

  ngOnInit() {
    this.previewCard = false;
    this.defaultCard();
  }

  defaultCard() {
    this.newCard = {
      id: 0,
      title: '',
      subTitle: '',
      urlImage: ''
    };
  }

  preview(newCard) {
    this.previewCard = true;
  }

  addCard(newCard) {
    this.cardService
      .addCard(newCard);
  }
}
