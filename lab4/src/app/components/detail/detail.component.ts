import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cv } from '../../models/cv.model';
import { NgIf } from '@angular/common';
import { EmbaucheService } from '../../services/embauche/embauche.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    NgIf,
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent{
  @Input() cv: Cv | null = null;
  constructor(
    private hireService: EmbaucheService,
    private toastrService: ToastrService
  ) {}


  addCvtoHired() {
    if (this.cv && !this.hireService.getHiredCvs().includes(this.cv)) {
      this.hireService.addCvtoHired(this.cv);
      this.toastrService.success("Hired Successfully!");
    }

    else if (this.cv && this.hireService.getHiredCvs().includes(this.cv)) {
      this.toastrService.warning("Candidate Already Hired");
    }
  }


}
