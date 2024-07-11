import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.scss'],
  animations: [
    trigger('fadeInLogoAndTitle', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 }))
      ])
    ]),
    trigger('fadeInContent', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2s', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class PageAccueilComponent implements OnInit {
  title = 'LE CROISSANT FERTILE';
  showContent = false;
  showInitialBackground = true;

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
          // Once typing is complete, show the rest of the content
          setTimeout(() => {
            this.showContent = true;
            this.showInitialBackground = false;
          }, 500); // Delay for smooth transition
        }
      };

      typeEffect();
    }
  }
}