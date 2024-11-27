import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-color-changer',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './color-changer.component.html',
  styleUrl: './color-changer.component.scss'
})
export class ColorChangerComponent {
  backgroundColor: string = 'lightblue';

  updateBackgroundColor(newColor: string) {
    this.backgroundColor = newColor;
  }
}
