import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, style, transition, animate } from '@angular/animations';
import { ViewportScroller } from '@angular/common';

interface Event {
  artist: string;
  date: string;
  address: string;
}

@Component({
  selector: 'app-page-evenement',
  templateUrl: './page-evenement.component.html',
  styleUrls: ['./page-evenement.component.scss'],
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
export class PageEvenementComponent implements OnInit {
  title = 'Prochain Événement';
  showContent = false;
  isBurgerMenuOpen = false;
  isModalOpen = false;
  isTicketModalOpen = false;
  filterText = '';
  artistName = '';
  eventDate = '';
  eventAddress = '';
  eventImage = '';

  // Ticket Modal Variables
  ticketQuantity = 1;
  ticketEmail = '';
  selectedEvent: Event | null = null;

  events: Event[] = [
    { artist: 'Muhoza', date: 'Lundi le 20 Juillet', address: 'Belmont, Adresse...' },
    { artist: 'Shreez', date: 'Mardi le 21 Juillet', address: 'Belmont, Adresse...' },
    { artist: 'Lil Baby', date: 'Mercredi le 22 Juillet', address: 'Belmont, Adresse...' }
  ];

  filteredEvents = this.events;

  constructor(private router: Router, private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    this.typeTitleText();
  }

  typeTitleText() {
    const titleElement = document.getElementById('title');
    if (titleElement) {
      const titleText = this.title;
      let index = 0;
      titleElement.textContent = '';

      const typeEffect = () => {
        if (index < titleText.length) {
          titleElement.textContent += titleText.charAt(index);
          index++;
          setTimeout(typeEffect, 150);
        } else {
          setTimeout(() => {
            this.showContent = true;
          }, 500);
        }
      };

      typeEffect();
    }
  }

  toggleBurgerMenu() {
    this.isBurgerMenuOpen = !this.isBurgerMenuOpen;
  }

  filterEvents() {
    this.filteredEvents = this.events.filter(event =>
      event.artist.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }

  navigateToMain(anchor?: string) {
    this.router.navigate(['/']).then(() => {
      if (anchor) {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }

  navigateToArtists() {
    this.router.navigate(['/artists']).then(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }

  navigateToEvenement() {
    this.router.navigate(['/evenement']).then(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }

  navigateToServices() {
    this.router.navigate(['/services']).then(() => {
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

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  confirmAddEvent() {
    if (this.artistName && this.eventDate && this.eventAddress && this.eventImage) {
      console.log('Event Artist:', this.artistName);
      console.log('Event Date:', this.eventDate);
      console.log('Event Address:', this.eventAddress);
      console.log('Event Image:', this.eventImage);
      this.closeModal();
    }
  }

  // Ticket Modal Methods
  openTicketModal(event: Event) {
    this.selectedEvent = event;
    this.isTicketModalOpen = true;
  }

  closeTicketModal() {
    this.isTicketModalOpen = false;
  }

  confirmPurchase() {
    if (this.ticketQuantity > 0 && this.ticketEmail) {
      console.log('Purchasing tickets for:', this.selectedEvent);
      console.log('Quantity:', this.ticketQuantity);
      console.log('Email:', this.ticketEmail);
      this.closeTicketModal();
    }
  }
}
