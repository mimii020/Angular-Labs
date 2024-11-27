import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mini-word',
  standalone: true,
  imports: [
    NgStyle, 
    FormsModule,
    NgFor
  ],
  templateUrl: './mini-word.component.html',
  styleUrl: './mini-word.component.scss'
})
export class MiniWordComponent {
  textColor: string = "#000000";
  textFont: string = "Arial";
  textSize: number = 30;

  fonts: string[] = ['Arial', 'Verdana', 'Times New Roman', 'Courier New', 'Georgia'];

}
