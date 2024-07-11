import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  // Or .scss if using SCSS
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'my-angular-app';
}
