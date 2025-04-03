import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cardlist',
  standalone:true,
  imports: [CardComponent,NgFor],
  templateUrl: './cardlist.component.html',
  styleUrl: './cardlist.component.css'
})
export class CardlistComponent {

  cardData = [
    { imageUrl: 'images/card1.jpg', title: 'Productivité maximale', description:'At vero eos et accusamus et iusto ' },
    { imageUrl: 'images/card2.jpg', title: 'Collaboration facile',description:'At vero eos et accusamus et iustoAt vero eos et accusamus et iusto' },
    { imageUrl: 'images/card3.jpg', title: 'Sécurité Garantie',description:'At vero eos et accusamus et iusto At vero eos et accusamus et iusto' },
    { imageUrl: 'images/card4.jpg', title: 'Accessible gratuit',description:'At vero eos et accusamus et iusto At vero eos et accusamus et iusto' }
  ];

}
