import { Component } from '@angular/core';
import { HeroComponent } from '../../component/hero/hero.component';
import { CardlistComponent } from '../../component/cardlist/cardlist.component';
import { TextCardListComponent } from '../../component/text-card-list/text-card-list.component';


@Component({
  selector: 'app-home',
  imports: [HeroComponent,CardlistComponent,TextCardListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
