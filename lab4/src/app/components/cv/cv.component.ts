import { Component, OnInit } from '@angular/core';
import { CvService } from '../../services/cv/cv.service';
import { Cv } from '../../models/cv.model';
import { ListeComponent } from "../liste/liste.component";
import { DetailComponent } from "../detail/detail.component";
import { HiredCvComponent } from '../hired-cv/hired-cv.component';
import { EmbaucheService } from '../../services/embauche/embauche.service';
import { ToastrService } from 'ngx-toastr';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [
    ListeComponent, 
    DetailComponent,
    HiredCvComponent,
  ],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss'
})
export class CvComponent implements OnInit {
  cvs: Cv[]=[];
  selectedCv: Cv | null =  null;
  constructor(
    private cvService: CvService,
    private toastrService: ToastrService,
  ){};

  ngOnInit(): void {
      this.getCvs();
      this.cvService.selectedCv$.subscribe((cv) => {
        this.selectedCv=cv;
      })
  }

  getCvs() {
    this.cvService.getCvs().subscribe({
      next: (cvs) => {
        this.cvs = cvs;
      },
      error: (err) => {
        this.toastrService.error("Couldnt load CVs");
      }
    })
  }
}
