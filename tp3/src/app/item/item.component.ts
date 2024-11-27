import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cv } from '../models/cv.model';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  @Input() cv!: Cv;
  @Output() cvSelected=new EventEmitter<Cv>();

  onSelectCv() {
    this.cvSelected.emit(this.cv);
  }
}
