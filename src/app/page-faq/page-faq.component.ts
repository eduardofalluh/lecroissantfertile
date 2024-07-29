import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, style, transition, animate } from '@angular/animations';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-page-faq',
  templateUrl: './page-faq.component.html',
  styleUrls: ['./page-faq.component.scss'],
  animations: [
    trigger('fadeInLogoAndTitle', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('3s', style({ opacity: 1 }))
      ])
    ]),
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
export class PageFaqComponent implements OnInit {
  isBurgerMenuOpen = false;
  isModalOpen = false;
  question: string = '';
  answer: string = '';
  faqs: { question: string, answer: string }[] = [
    { question: 'What is Le Croissant Fertile?', answer: 'LE CROISSANT FERTILE EST UNE MAISON DE DISQUES QUI FOURNIT DES SERVICES DE L\'INDUSTRIE À DIVERS ARTISTES INDÉPENDANTS ŒUVRANT DANS TOUS LES GENRES MUSICAUX AU QUÉBEC.' },
    // Add more initial FAQs as needed
    { question: 'What is Le Croissant Fertile?', answer: 'LE CROISSANT FERTILE EST UNE MAISON DE DISQUES QUI FOURNIT DES SERVICES DE L\'INDUSTRIE À DIVERS ARTISTES INDÉPENDANTS ŒUVRANT DANS TOUS LES GENRES MUSICAUX AU QUÉBEC.' },
    { question: 'What is Le Croissant Fertile?', answer: 'LE CROISSANT FERTILE EST UNE MAISON DE DISQUES QUI FOURNIT DES SERVICES DE L\'INDUSTRIE À DIVERS ARTISTES INDÉPENDANTS ŒUVRANT DANS TOUS LES GENRES MUSICAUX AU QUÉBEC.' },
    { question: 'What is Le Croissant Fertile?', answer: 'LE CROISSANT FERTILE EST UNE MAISON DE DISQUES QUI FOURNIT DES SERVICES DE L\'INDUSTRIE À DIVERS ARTISTES INDÉPENDANTS ŒUVRANT DANS TOUS LES GENRES MUSICAUX AU QUÉBEC.' }

  ];

  constructor(private router: Router, private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
  }

  toggleBurgerMenu(): void {
    this.isBurgerMenuOpen = !this.isBurgerMenuOpen;
  }

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.clearModalInputs();
  }

  confirmAddFAQ(): void {
    if (this.question && this.answer) {
      this.faqs.push({ question: this.question, answer: this.answer });
      this.closeModal();
    } else {
      alert('Please fill out both fields.');
    }
  }

  clearModalInputs(): void {
    this.question = '';
    this.answer = '';
  }

  navigateToMain(): void {
    this.router.navigate(['/']).then(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
      location.reload();
    });
  }

  navigateToArtists(): void {
    this.router.navigate(['/artists']).then(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }

  navigateToEvenement(): void {
    this.router.navigate(['/evenement']).then(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }

  navigateToServices(): void {
    this.router.navigate(['/services']).then(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }

  navigateToContact(): void {
    this.router.navigate(['/contact']).then(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }

  navigateToFaq(): void {
    this.router.navigate(['/faq']).then(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }
}
