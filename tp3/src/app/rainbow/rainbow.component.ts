import { Component } from '@angular/core';
import { RainbowDirective } from '../rainbow.directive';

@Component({
  selector: 'app-rainbow',
  standalone: true,
  imports: [RainbowDirective],
  templateUrl: './rainbow.component.html',
  styleUrl: './rainbow.component.scss'
})
export class RainbowComponent {

}
