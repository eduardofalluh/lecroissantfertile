// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { ArtistPageComponent } from './artist-page/artist-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { ArtistsComponent } from './artists/artists.component';
import { PageEvenementComponent } from './page-evenement/page-evenement.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageFaqComponent } from './page-faq/page-faq.component';

const routes: Routes = [
  { path: '', component: PageAccueilComponent }, // Default route
  { path: 'artist', component: ArtistPageComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: 'artists', component: ArtistsComponent },
  { path: 'evenement', component: PageEvenementComponent },
  { path: 'contact', component: PageContactComponent },
  { path: 'faq', component: PageFaqComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
