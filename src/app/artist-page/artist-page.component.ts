import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes } from '@angular/animations';
import { Router } from '@angular/router';

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
    trigger('slideInOut', [
      transition(':enter', [
        animate('0.3s ease-in-out', keyframes([
          style({ transform: 'translateY(-100%)', opacity: 0, offset: 0 }),
          style({ transform: 'translateY(0)', opacity: 1, offset: 1.0 })
        ]))
      ]),
      transition(':leave', [
        animate('0.3s ease-in-out', keyframes([
          style({ transform: 'translateY(0)', opacity: 1, offset: 0 }),
          style({ transform: 'translateY(-100%)', opacity: 0, offset: 1.0 })
        ]))
      ])
    ])
  ]
})
export class ArtistPageComponent implements OnInit {
  constructor(private router: Router) {}

  isBurgerMenuOpen = false;

  ngOnInit() {}

  toggleBurgerMenu() {
    this.isBurgerMenuOpen = !this.isBurgerMenuOpen;
  }

  navigateToMain() {
    console.log("WAS HEREEE");
    this.router.navigate(['/']);
  }
}
