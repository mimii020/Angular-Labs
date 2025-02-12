import { Component, OnInit } from '@angular/core';
import { FormComponent } from "../form/form.component";
import { DetailComponent } from "../detail/detail.component";
import { Cv } from '../models/cv.model';
import { CvService } from '../services/cv.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-business-card',
  standalone: true,
  imports: [
    FormComponent, 
    DetailComponent,
    NgIf
  ],
  templateUrl: './business-card.component.html',
  styleUrl: './business-card.component.scss'
})
export class BusinessCardComponent implements OnInit {
  selectedCv: Cv = {
    id: 0,
    name: '',
    firstname: '',
    age: 0,
    cin: '',
    motto: '',
    job: '',
    description: '',
    followers: 0,
    following: 0,
    projects: 0,
    jobKeywords: '',
    path: ''
  };

  constructor(private cvService: CvService) {};

  ngOnInit(): void {
    this.selectedCv = this.cvService.getCvs()[0];
  }

  updateCv(updatedCv: Cv) {
    this.selectedCv = updatedCv;
  }

}
