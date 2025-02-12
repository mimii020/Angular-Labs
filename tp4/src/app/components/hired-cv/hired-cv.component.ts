import { Component, Input, OnInit } from '@angular/core';
import { Cv } from '../../models/cv.model';
import { NgFor, NgIf } from '@angular/common';
import { EmbaucheService } from '../../services/embauche/embauche.service';


@Component({
  selector: 'app-hired-cv',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './hired-cv.component.html',
  styleUrl: './hired-cv.component.scss'
})
export class HiredCvComponent implements OnInit{
  @Input() cv: Cv | null = null;
  hiredCvs: Cv[] = [];

  constructor(private hireService: EmbaucheService) {}

  ngOnInit(): void {
    this.hireService.hiredCvs$.subscribe((hiredCvs) => {
      this.hiredCvs = hiredCvs;
    })
  }
  
}
