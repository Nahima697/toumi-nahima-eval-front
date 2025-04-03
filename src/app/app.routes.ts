import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { TarifComponent } from './page/tarif/tarif.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tarifs', component: TarifComponent },
];
