import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalenderComponent } from './calender/calender.component';
import { FavoritesComponent } from './favorites/favorites.component';

const routes: Routes = [
  { path: 'calender', component: CalenderComponent },
  { path: 'favorites', component: FavoritesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
