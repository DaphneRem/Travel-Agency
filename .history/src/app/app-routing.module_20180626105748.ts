import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { CardCreationComponent } from './card-creation/card-creation.component';

const routes: Routes = [
  { path: '', redirectTo: 'creation', pathMatch: 'full' },
  {
    path: 'creation',
    children : [
      {
        path: '',
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

