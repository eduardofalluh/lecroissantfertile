import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

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
    trigger('fadeInOutArtist', [
      transition('in => out', [
        animate('1s', style({ opacity: 0, transform: 'scale(0.8) translateX(-100%)' }))
      ]),
      transition('out => in', [
        style({ opacity: 0, transform: 'scale(0.8) translateX(100%)' }),
        animate('1s', style({ opacity: 1, transform: 'scale(1) translateX(0)' }))
      ])
    ])
  ]
})
export class PageAccueilComponent implements OnInit {
  title = 'LE CROISSANT FERTILE';
  showContent = false;
  isBurgerMenuOpen = false;
  isAnimationComplete = false;
  isModalOpen = false;
  isLoginModalOpen = false;
  isSignUp = false;
  iframeCode = '';
  name = '';
  email = '';
  password = '';
  rememberMe = false;

  artists = [
    { name: 'Artist Name 1', image: 'muhoza.jpg' },
    { name: 'Artist Name 2', image: 'muhoza.jpg' },
    { name: 'Artist Name 3', image: 'muhoza.jpg' },
    { name: 'Artist Name 4', image: 'muhoza.jpg' },
    { name: 'Artist Name 5', image: 'muhoza.jpg' },
  ];

  currentArtistIndex = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkRefresh();
    this.typeTitleText();
    this.startArtistRotation();
  }

  startArtistRotation() {
    setInterval(() => {
      this.currentArtistIndex = (this.currentArtistIndex + 1) % this.artists.length;
    }, 4000); // Rotate every 8 seconds
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
          setTimeout(() => {
            this.showContent = true;
            this.isAnimationComplete = true;
          }, 500);
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

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  confirmIframe() {
    console.log('Iframe code:', this.iframeCode);
    this.closeModal();
  }

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
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Remember me:', this.rememberMe);
    this.closeLoginModal();
  }

  confirmSignUp() {
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
