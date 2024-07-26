import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, style, transition, animate } from '@angular/animations';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-page-contact',
  templateUrl: './page-contact.component.html',
  styleUrls: ['./page-contact.component.scss'],
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
export class PageContactComponent implements OnInit {
  title = 'CONTACTS';
  showContent = false;
  isBurgerMenuOpen = false;

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

  navigateToMain() {
    this.router.navigate(['/']).then(() => {
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
