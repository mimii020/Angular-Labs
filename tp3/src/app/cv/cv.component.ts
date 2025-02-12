import { Component, OnInit } from '@angular/core';
import { CvService } from '../services/cv.service';
import { Cv } from '../models/cv.model';
import { ListeComponent } from "../liste/liste.component";
import { DetailComponent } from "../detail/detail.component";

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [ListeComponent, DetailComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss'
})
export class CvComponent implements OnInit {
  cvs: Cv[]=[];
  selectedCv: Cv | null =  null;
  constructor(private cvService: CvService){};

  ngOnInit(): void {
      this.cvs=this.cvService.getCvs();
      this.cvService.selectedCv$.subscribe((cv) => {
        this.selectedCv=cv;
      })
  }
}
