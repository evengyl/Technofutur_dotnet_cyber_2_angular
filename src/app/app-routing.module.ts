import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/compos/home/home.component';
import { Bindings1Component } from './components/demos/bindings1/bindings1.component';
import { Exos01Component } from './components/exos/exos01/exos01.component';
import { FourOfourComponent } from './components/demos/four-ofour/four-ofour.component';
import { Pipes2Component } from './components/demos/pipes2/pipes2.component';
import { Exos05Component } from './components/exos/exos05/exos05.component';
import { DirectivesStruct3Component } from './components/demos/directives-struct3/directives-struct3.component';
import { Exos1Component } from './components/exos/exos1/exos1.component';
import { Directives4Component } from './components/demos/directives4/directives4.component';
import { TopPlayersComponent } from './components/demos/inputOutput5/top-players/top-players.component';

const routes: Routes = [
  { path : "", component : HomeComponent},
  { path : "bindings1", component : Bindings1Component},
  { path : "exos01", component : Exos01Component},
  { path : "pipes2", component : Pipes2Component},
  { path : "exos05", component : Exos05Component},
  { path : "directiveStruct3", component : DirectivesStruct3Component},
  { path : "exos1", component : Exos1Component},
  { path : "directives4", component : Directives4Component},
  { path : "topPlayers5", component : TopPlayersComponent},







  
  { path : "**", component : FourOfourComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
