import { Component, Input } from '@angular/core';
import { Cv } from '../models/cv.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  @Input() cv: Cv | null = null;

}
