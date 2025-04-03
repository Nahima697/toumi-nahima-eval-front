import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-card',
  imports: [],
  templateUrl: './text-card.component.html',
  styleUrl: './text-card.component.css'
})
export class TextCardComponent {

  @Input() number : string = '';
  @Input() title:string ='';
  @Input() description:string='';

}
