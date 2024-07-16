import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { ArtistPageComponent } from './artist-page/artist-page.component';
import { ButtonComponent } from './button/button.component';
import { AppRoutingModule } from './app-routing.module'; // Import AppRoutingModule
// Import SwiperModule
// import 'swiper/swiper-bundle.min.css';

@NgModule({
  declarations: [
    AppComponent,
    PageAccueilComponent,
    ButtonComponent,
    ArtistPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
  bootstrap: [AppComponent]
})
export class AppModule { }
