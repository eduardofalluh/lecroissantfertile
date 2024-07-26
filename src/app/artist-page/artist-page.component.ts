import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, style, transition, animate } from '@angular/animations';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.scss'],
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
    trigger('expandCollapse', [
      transition(':enter', [
        style({ height: '0px', opacity: 0 }),
        animate('300ms ease-out', style({ height: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ height: '*', opacity: 1 }),
        animate('300ms ease-out', style({ height: '0px', opacity: 0 }))
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
export class ArtistPageComponent implements OnInit {
  isBurgerMenuOpen = false;
  showFullBio = false;

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

  toggleSeeMore() {
    this.showFullBio = !this.showFullBio;
  }

  get seeMoreButtonText() {
    return this.showFullBio ? '▲' : '▼';
  }

  navigateToServices() {
    this.router.navigate(['/services']).then(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
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
}
