import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './shared/compos/home/home.component';
import { NavbarComponent } from './shared/compos/navbar/navbar.component';
import { FooterComponent } from './shared/compos/footer/footer.component';
import { Bindings1Component } from './components/demos/bindings1/bindings1.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { Exos01Component } from './components/exos/exos01/exos01.component';
import { FourOfourComponent } from './components/demos/four-ofour/four-ofour.component';
import { Pipes2Component } from './components/demos/pipes2/pipes2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    Bindings1Component,
    Exos01Component,
    FourOfourComponent,
    Pipes2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
