import { Component, Input } from '@angular/core';
import { Shoe } from 'src/interfaces/shoe';

@Component({
  selector: 'app-shoe-card',
  templateUrl: './shoe-card.component.html',
  styleUrls: ['./shoe-card.component.css']
})
export class ShoeCardComponent {
  @Input() shoe: Shoe | undefined
}
