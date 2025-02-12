import { Injectable } from '@angular/core';
import { Cv } from '../../models/cv.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  private hiredCvsSubject = new BehaviorSubject<Cv[]>([]);
  hiredCvs$ = this.hiredCvsSubject.asObservable();

  addCvtoHired(cv: Cv) {
    const currentHiredCvs = this.hiredCvsSubject.getValue();
    if (!currentHiredCvs.includes(cv)) {
      this.hiredCvsSubject.next([...currentHiredCvs, cv]);
    }
  }


  getHiredCvs(): Cv[] {
    return this.hiredCvsSubject.getValue();
  }
}
