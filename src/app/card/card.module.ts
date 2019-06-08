import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CardDeckPage } from './card-deck/card-deck.page';
import { CardListingPage } from './card-listing/card-listing.page';

import { CardService } from './shared/card.service';
import { CardListComponent } from './components/card-list.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: CardDeckPage },
      { path: 'cardListing', component: CardListingPage }
    ])
  ],
  providers: [CardService],
  declarations: [CardDeckPage, CardListComponent, CardListingPage]
})
export class CardPageModule {}
