import { Component } from '@angular/core';
import { CardService } from '../shared/card.service';

import { CardDeck } from './../shared/card.model';

@Component({
  selector: 'app-card-deck',
  templateUrl: './card-deck.page.html',
  styleUrls: ['./card-deck.page.scss']
})
export class CardDeckPage {
  private readonly ALLOWED_DECKS = [
    'classes',
    'factions',
    'qualities',
    'types',
    'races'
  ];

  public cardDecks: CardDeck[] = [];

  constructor(private cardService: CardService) {
    this.getCardDecks();
  }

  private getCardDecks() {
    this.cardService.getAllCardDecks().subscribe((cardDecks: CardDeck[]) => {
      this.extractAllowedDecks(cardDecks);
    });
  }

  //Extraigo solo lo que me interesa de la respuesta de la API
  extractAllowedDecks(cardDecks: CardDeck[]) {
    this.ALLOWED_DECKS.forEach((deckName: string) => {
      this.cardDecks.push({ name: deckName, types: cardDecks[deckName] });
    });
  }
}
