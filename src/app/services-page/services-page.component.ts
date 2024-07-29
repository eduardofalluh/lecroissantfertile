import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('0.5s ease-out', style({ opacity: 0 }))
      ])
    ]),
    trigger('fadeInContent', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
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
export class ServicesPageComponent implements OnInit {
  isBurgerMenuOpen = false;
  isServiceModalOpen = false; // State for service modal
  services = [
    {
      title: 'Distribution (Physique & Numérique)',
      description: 'Permet aux artistes de rendre leurs morceaux disponibles sur des plateformes de streaming et de téléchargement. La distribution est la mise en ligne, la gestion des droits, et de la collecte des revenus, facilitant ainsi l\'accès à un large public. Elle consiste aussi à prendre en charge les supports tangibles comme des CD, vinyles ou cassettes aux détaillants.',
      image: 'assets/images/service1.png'
    },
    {
      title: 'Promotion Physique',
      description: 'La promotion physique en musique implique des activités visant à augmenter la visibilité et les ventes d\'un album ou d\'un single à travers des moyens tangibles. Par exemple, l\'affichage publicitaire sur des panneaux, posters et bannières dans les lieux publics ou à proximité des magasins de musique et salles de spectacles.',
      image: 'assets/images/service2.png'
    },
    {
      title: 'Promotion Numérique',
      description: 'La promotion numérique en musique utilise des canaux en ligne pour accroître la visibilité et les ventes d\'un album ou d\'un single. Elle inclut l\'utilisation des réseaux sociaux, le placement dans des playlists de streaming, la publicité en ligne, et les collaborations avec des influenceurs. Les campagnes telles les articles sur des blogs spécialisés font également partie de cette stratégie. L\'objectif est de toucher un large public et d\'encourager les écoutes et les téléchargements.',
      image: 'assets/images/service3.png'
    },
    {
      title: 'Booking',
      description: 'Le booking consiste à organiser et à gérer les concerts et les tournées d\'un artiste. Cela inclut la négociation des contrats, la planification des dates et des lieux, ainsi que la coordination logistique des spectacles. Notre équipe de booking travaille pour maximiser la visibilité et les revenus de l\'artiste à travers des performances live.',
      image: 'assets/images/service4.png'
    },
    {
      title: 'Création de Spectacle',
      description: 'Le montage de spectacle en musique implique la planification et la mise en place de tous les aspects techniques et logistiques d\'un concert. Cela comprend la gestion de la sonorisation, de l\'éclairage, de la scénographie, et des équipements nécessaires. Notre objectif est de créer une expérience immersive et fluide pour le public et l\'artiste.',
      image: 'assets/images/service5.png'
    },
    {
      title: 'Enregistrement',
      description: 'L\'enregistrement comprend l\'accès à des ingénieurs du son, du matériel de pointe, et souvent des services de mixage et de mastering. Ce service vise à produire des enregistrements prêts pour la distribution et la diffusion.',
      image: 'assets/images/service6.png'
    },
    {
      title: 'Production Musicale',
      description: 'La production musicale est un processus créatif complet qui commence par la conceptualisation et l\'arrangement des éléments musicaux. Elle inclut l\'enregistrement des instruments, la manipulation des sons à l\'aide de logiciels et d\'équipements spécialisés. Les producteurs collaborent étroitement avec les artistes pour réaliser leur vision artistique tout en utilisant leur expertise pour affiner et améliorer chaque élément musical.',
      image: 'assets/images/service7.png'
    },
    {
      title: 'Création d\'un Dossier de Presse',
      description: 'La création d\'un dossier de presse implique la compilation d\'informations clés sur un artiste ou un projet musical, telles que la biographie, les photos, les clips vidéo et les citations de presse. Souvent accompagnés de design graphique unique et attrayant, ce document vise à présenter de manière concise et visuellement engageante l\'histoire et les réalisations de l\'artiste aux médias et aux professionnels de l\'industrie, facilitant ainsi la promotion et la couverture médiatique.',
      image: 'assets/images/service8.png'
    }
  ];

  newService = {
    title: '',
    description: '',
    image: ''
  };

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

  openServiceModal() {
    this.isServiceModalOpen = true;
  }

  closeServiceModal() {
    this.isServiceModalOpen = false;
  }

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.newService.image = event.target.files[0];
    }
  }

  confirmService() {
    if (this.newService.title && this.newService.description && this.newService.image) {
      // Handle the new service addition logic
      console.log(this.newService);
      // Reset the form
      this.newService = {
        title: '',
        description: '',
        image: ''
      };
      this.closeServiceModal();
    }
  }
}
