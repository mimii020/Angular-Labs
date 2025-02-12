import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageLoopComponent } from './image-loop.component';

describe('ImageLoopComponent', () => {
  let component: ImageLoopComponent;
  let fixture: ComponentFixture<ImageLoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageLoopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
