import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Bindings1Component } from './components/bindings1/bindings1.component';
import { Exos01Component } from './components/exos/exos01/exos01.component';
import { FourOfourComponent } from './components/four-ofour/four-ofour.component';

const routes: Routes = [
  { path : "", component : HomeComponent},
  { path : "bindings1", component : Bindings1Component},
  { path : "exos01", component : Exos01Component},







  
  { path : "**", component : FourOfourComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
