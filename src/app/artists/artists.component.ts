import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss'],
  animations: [
    trigger('fadeInContent', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 }))
      ])
    ]),
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.3s ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('0.3s ease-out', style({ opacity: 0 }))
      ])
    ]),
    trigger('slideInRight', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s ease-in', style({ transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class ArtistsComponent implements OnInit {
  isBurgerMenuOpen = false;
  isModalOpen = false;
  image: string = '';
  artistName: string = '';
  biography: string = '';
  disque: string = '';
  spectacle: string = '';
  presse: string = '';
  edition: string = '';
  spotifyLink: string = '';
  appleMusicLink: string = '';
  filterText = '';

  artists = [
    { name: 'Artist 1', image: 'assets/images/muhoza.jpg' },
    { name: 'Artist 2', image: 'assets/images/artist2.jpg' },
    
    // Add more artist data as needed
  ];

  filteredArtists = this.artists;

  constructor(private router: Router, private viewportScroller: ViewportScroller) {}

  ngOnInit() {}

  toggleBurgerMenu() {
    this.isBurgerMenuOpen = !this.isBurgerMenuOpen;
  }

  navigateToMain() {
    this.router.navigate(['/']).then(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }

  navigateToArtists() {
    this.router.navigate(['/artists']).then(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }

  navigateToServices() {
    this.router.navigate(['/services']).then(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }

  navigateToEvenement() {
    this.router.navigate(['/evenement']).then(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }

  navigateToContact() {
    this.router.navigate(['/contact']).then(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }

  navigateToFaq() {
    this.router.navigate(['/faq']).then(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }

  navigateToArtist() {
    this.router.navigate(['/artist']).then(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.clearModalInputs();
  }

  confirmAddArtist() {
    if (this.artistName && this.biography && this.image) {
      // Handle the logic for adding the artist
      console.log('Artist Image:', this.image);
      console.log('Artist Name:', this.artistName);
      console.log('Biography:', this.biography);
      console.log('Disque:', this.disque);
      console.log('Spectacle:', this.spectacle);
      console.log('Presse:', this.presse);
      console.log('Edition:', this.edition);
      console.log('Spotify Link:', this.spotifyLink);
      console.log('Apple Music Link:', this.appleMusicLink);
      this.closeModal();
    } else {
      alert('Please fill out the required fields.');
    }
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.image = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  clearModalInputs() {
    this.image = '';
    this.artistName = '';
    this.biography = '';
    this.disque = '';
    this.spectacle = '';
    this.presse = '';
    this.edition = '';
    this.spotifyLink = '';
    this.appleMusicLink = '';
  }

  filterArtists() {
    this.filteredArtists = this.artists.filter(artist =>
      artist.name.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
}



