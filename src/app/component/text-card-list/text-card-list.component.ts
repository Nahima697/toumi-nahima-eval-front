import { Component } from '@angular/core';
import { TextCardComponent } from '../text-card/text-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-text-card-list',
  imports: [TextCardComponent,NgFor],
  templateUrl: './text-card-list.component.html',
  styleUrl: './text-card-list.component.css'
})
export class TextCardListComponent {

  cardTextData = [
    { number: '01', title: 'Agenda Intelligent', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.' },
    { number: '02', title: 'Outil de productivité',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ' },
    { number: '03', title: 'Communication fluide',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.' },
    { number: '04', title: 'Tableau de bord',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.' },
    { number: '05', title: 'Tableau de bord',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.' },
  ];

}
