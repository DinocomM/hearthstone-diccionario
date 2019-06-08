import { Injectable } from '@angular/core';
import { of as ObservableOf, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CardDeck } from './card.model';

@Injectable()
export class CardService {
  private readonly HS_API_URL =
    'https://omgvamp-hearthstone-v1.p.rapidapi.com';
  private readonly API_KEY =
    '8086bbfeddmsh9b0d12b1c9cf95fp115217jsn1d74ec3ef113';
  private readonly cardDecks: string[] = [
    'Druid',
    'Mage',
    'Warrior',
    'Rogue',
    'Shaman',
    'Priest',
    'Warlock',
    'Hunter',
    'Paladin'
  ];

  constructor(private http: HttpClient) {}

  public getAllCardDecks(): Observable<CardDeck[]> {
    const headers = new HttpHeaders({'X-RapidAPI-Key': this.API_KEY});

    return this.http.get<CardDeck[]>(`${this.HS_API_URL}/info`, {headers});
  }
}
