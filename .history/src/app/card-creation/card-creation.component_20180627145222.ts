import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-card-creation',
  templateUrl: './card-creation.component.html',
  styleUrls: ['./card-creation.component.css'],
  providers: [
    CardService
  ]
})
export class CardCreationComponent implements OnInit {

  constructor( private cardService: CardService) { }

  ngOnInit() {
  }

}
