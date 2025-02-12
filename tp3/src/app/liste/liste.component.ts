import { Component, Input, Output } from '@angular/core';
import { Cv } from '../models/cv.model';
import { CvService } from '../services/cv.service';
import { ItemComponent } from '../item/item.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [
    ItemComponent,
    NgFor
  ],
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.scss'
})
export class ListeComponent {
  @Input() cvs:Cv[]=[]
  
  constructor(private cvService: CvService){};
  onSelectCv(cv: Cv): void {
    this.cvService.selectCv(cv);
  }

}
