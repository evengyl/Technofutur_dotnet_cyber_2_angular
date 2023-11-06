import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Bindings1Component } from './components/bindings1/bindings1.component';

const routes: Routes = [
  { path : "", component : HomeComponent},
  { path : "bindings1", component : Bindings1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
