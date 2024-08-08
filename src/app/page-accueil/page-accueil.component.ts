import { Component, OnInit, HostListener } from '@angular/core';
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
          stagger(500, [
            animate('2s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('slideInFromLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('1s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class PageAccueilComponent implements OnInit {
  title = 'LE CROISSANT FERTILE';
  showContent = false;
  isBurgerMenuOpen = false;
  isAnimationComplete = false; // Track if animation is complete
  isModalOpen = false; // Track modal state
  isLoginModalOpen = false; // Track login modal state
  isSignUp = false; // Track if the modal is for sign up
  iframeCode = ''; // Track iframe code input
  name = ''; // Track name input for sign up
  email = ''; // Track email input for login/sign up
  password = ''; // Track password input for login/sign up
  rememberMe = false; // Track remember me checkbox

  artists = [
    { name: 'Artist Name 1', image: 'muhoza.jpg' },
    { name: 'Artist Name 2', image: 'muhoza.jpg' },
    { name: 'Artist Name 3', image: 'muhoza.jpg' },
    { name: 'Artist Name 4', image: 'muhoza.jpg' },
    { name: 'Artist Name 5', image: 'muhoza.jpg' },
    { name: 'Artist Name 6', image: 'muhoza.jpg' },
    { name: 'Artist Name 7', image: 'muhoza.jpg' },
    { name: 'Artist Name 8', image: 'muhoza.jpg' },
    { name: 'Artist Name 9', image: 'muhoza.jpg' },
    { name: 'Artist Name 10', image: 'muhoza.jpg' },
  ];

  constructor(private router: Router, private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    this.checkRefresh();
    this.typeTitleText();
    this.addScrollEventListener();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.handleScroll();
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

  // Modal Methods
  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  confirmIframe() {
    // Logic to handle the iframe code, such as storing it or displaying it somewhere
    console.log('Iframe code:', this.iframeCode);
    this.closeModal();
  }

  // Login Modal Methods
  openLoginModal() {
    this.isLoginModalOpen = true;
  }

  closeLoginModal() {
    this.isLoginModalOpen = false;
  }

  toggleSignUp() {
    this.isSignUp = !this.isSignUp;
  }

  confirmSignIn() {
    // Logic for sign in
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Remember me:', this.rememberMe);
    this.closeLoginModal();
  }

  confirmSignUp() {
    // Logic for sign up
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    this.closeLoginModal();
  }

  addScrollEventListener() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    const slideInElements = document.querySelectorAll('.slide-in');
    slideInElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('visible');
      }
    });
  }
}
