import { Component, Input, OnInit } from '@angular/core';
import { interval, map, startWith } from 'rxjs';

@Component({
  selector: 'app-image-loop',
  standalone: true,
  imports: [],
  templateUrl: './image-loop.component.html',
  styleUrl: './image-loop.component.scss'
})
export class ImageLoopComponent implements OnInit{
  images: string[] = [
    "../../../assets/cat1.jpg",
    "../../../assets/cat2cd .jpg"
  ];
  imageSize: number = 0;
  imageInterval: number = 3000;
  currentImage: string = '';

  ngOnInit(): void {
      interval(this.imageInterval)
      .pipe(
        startWith(0),
        map((index) => this.images[index % this.images.length])
      )
      .subscribe((image) => {
        this.currentImage = image;
      })
      
  }

}
