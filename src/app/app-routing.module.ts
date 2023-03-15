



import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FilmsComponent} from './Films/Films.component'

import { CharactersComponent } from './Characters/Characters.component';

const routes: Routes = [
  { path: '', component: FilmsComponent, },
  { path: 'Characters', component: CharactersComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }