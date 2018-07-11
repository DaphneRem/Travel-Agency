import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { CardCreationComponent } from './card-creation/card-creation.component';
import { DisplayCardsComponent } from './display-cards/display-cards.component';

const routes: Routes = [
  { path: '', redirectTo: 'cards', pathMatch: 'full' },
  {
    path: 'cards',
    children : [
      {
        path: '',
        component : DisplayCardsComponent,
      },
      {
        path: 'creation',
        component : CardCreationComponent,
      }
    ]
  },
  { path: '**', redirectTo: 'creation' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AppRoutingModule {}

