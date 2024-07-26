import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.scss'],
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
    trigger('fadeInUp', [
      transition('* => *', [
        query('.service-item', [
          style({ opacity: 0, transform: 'translateY(50px)' }),
          stagger(200, [
            animate('0.8s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class PageAccueilComponent implements OnInit {
  title = 'LE CROISSANT FERTILE';
  showContent = false;
  isBurgerMenuOpen = false;
  isAnimationComplete = false; // Track if animation is complete


  artists = [
    { name: 'Artist Name 1', image: 'muhoza.jpg' },
    { name: 'Artist Name 2', image: 'muhoza.jpg' },
    { name: 'Artist Name 3', image: 'muhoza.jpg' },
    { name: 'Artist Name 3', image: 'muhoza.jpg' },
    { name: 'Artist Name 3', image: 'muhoza.jpg' },
    { name: 'Artist Name 3', image: 'muhoza.jpg' },
    { name: 'Artist Name 3', image: 'muhoza.jpg' },
    { name: 'Artist Name 3', image: 'muhoza.jpg' },
    { name: 'Artist Name 3', image: 'muhoza.jpg' },
    { name: 'Artist Name 3', image: 'muhoza.jpg' },

  ];

  constructor(private router: Router, private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    this.checkRefresh();
    this.typeTitleText();
  }

  checkRefresh() {
    if (sessionStorage.getItem('isRefreshed') === 'true') {
      sessionStorage.setItem('isRefreshed', 'false');
    } else {
      sessionStorage.setItem('isRefreshed', 'true');
      location.reload();
    }
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
          // Once typing is complete, show the rest of the content
          setTimeout(() => {
            this.showContent = true;
            this.isAnimationComplete = true; // Mark animation as complete
          }, 500); // Delay for smooth transition
        }
      };

      typeEffect();
    }
  }

  toggleBurgerMenu() {
    this.isBurgerMenuOpen = !this.isBurgerMenuOpen;
  }

  navigateToArtist() {
    this.router.navigate(['/artist']).then(() => window.scrollTo(0, 0));
  }

  navigateToMain() {
    this.router.navigate(['/']).then(() => window.scrollTo(0, 0));
  }

  navigateToServices() {
    this.router.navigate(['/services']).then(() => window.scrollTo(0, 0));
  }

  navigateToArtists() {
    this.router.navigate(['/artists']).then(() => window.scrollTo(0, 0));
  }

  navigateToEvenement() {
    this.router.navigate(['/evenement']).then(() => window.scrollTo(0, 0));
  }

  navigateToContact() {
    this.router.navigate(['/contact']).then(() => window.scrollTo(0, 0));
  }

  navigateToFaq() {
    this.router.navigate(['/faq']).then(() => window.scrollTo(0, 0));
  }
}
