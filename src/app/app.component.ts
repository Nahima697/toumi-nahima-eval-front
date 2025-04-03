import { Component } from '@angular/core';
import { HeaderComponent } from './component/header/header.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from './component/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,RouterOutlet,HeaderComponent,FooterComponent],
  template: `
  <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
