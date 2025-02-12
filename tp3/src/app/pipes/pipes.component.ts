import { Component } from '@angular/core';
import { DefaultImagePipe } from "../default-image.pipe";

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [DefaultImagePipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {

}
