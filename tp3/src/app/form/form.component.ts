import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { formData } from './form.dummy-data';
import { NgFor, NgIf } from '@angular/common';
import { Cv } from '../models/cv.model';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    FormsModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  @Input() cv: Cv | null = null;
  @Output() cardUpdated = new EventEmitter<Cv>();
  cvProperties: { key: keyof Cv; label: string; placeholder: string }[] = formData;

  
  updateBusinessCard() {
    if (this.cv) {
      this.cardUpdated.emit(this.cv)
    }
  }

}
