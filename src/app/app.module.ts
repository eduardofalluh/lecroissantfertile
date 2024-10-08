import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { ArtistPageComponent } from './artist-page/artist-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { ArtistsComponent } from './artists/artists.component';
import { PageEvenementComponent } from './page-evenement/page-evenement.component';


import { AppRoutingModule } from './app-routing.module'; // Import AppRoutingModule
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageFaqComponent } from './page-faq/page-faq.component';
import { ThreeDLogoComponent } from './three-d-logo/three-d-logo.component';
// Import SwiperModule
// import 'swiper/swiper-bundle.min.css';

@NgModule({
  declarations: [
    AppComponent,
    PageAccueilComponent,
    ArtistPageComponent,
    ServicesPageComponent,
    ArtistsComponent,
    PageEvenementComponent,
    PageContactComponent,
    PageFaqComponent,
    ThreeDLogoComponent,
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
