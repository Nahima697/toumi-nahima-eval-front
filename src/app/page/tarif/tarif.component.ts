import { Component } from '@angular/core';
import { PricingCardComponent } from '../../component/pricing-card/pricing-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tarif',
  standalone:true,
  imports: [PricingCardComponent,NgFor],
  templateUrl: './tarif.component.html',
  styleUrl: './tarif.component.css'
})
export class TarifComponent {
  plans = [
    {
      label: 'BASIC',
      price: '$15',
      description: 'Pour les indépendants.',
      features: [
        'Accès aux outils essentiels',
        'Messagerie instantanée',
        'Stockage limité',
        'Support standard',
        'Accès mobile'
      ],
      style: 'border-gray-300'
    },
    {
      label: 'PRO',
      price: '$25',
      description: 'Pour les équipes en croissance.',
      features: [
        'Réunions vidéo HD',
        'Partage de fichiers illimité',
        'Intégrations avancées',
        'Sécurité renforcée',
        'Assistance prioritaire'
      ],
      style: 'bg-teal-600 text-white'
    },
    {
      label: 'ELITE',
      price: '$30',
      description: 'Expérience ultime.',
      features: [
        'Espaces personnalisables',
        'Intelligence artificielle',
        'Collaboration avancée',
        'Accès VIP',
        'Support 24/7'
      ],
      style: 'border-gray-300'
    }
  ];

}
