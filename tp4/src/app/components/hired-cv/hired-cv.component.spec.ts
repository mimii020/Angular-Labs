import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiredCvComponent } from './hired-cv.component';

describe('HiredCvsComponent', () => {
  let component: HiredCvComponent;
  let fixture: ComponentFixture<HiredCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HiredCvComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HiredCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
