import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]',
  standalone: true
})
export class RainbowDirective {
  private colors: string[] = [
    'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'
  ];

  @HostBinding('style.color') 
  textColor!: string;
  @HostBinding('style.borderColor')
  borderColor!: string;

  constructor() { 
    this.textColor = 'blue';
    this.borderColor = 'blue';

  }

  @HostListener('keyup') onKeyUp() {
    this.changeColor(); 
  }

  changeColor() {
    const randomIndex = Math.floor(Math.random() * this.colors.length);
    const color = this.colors[randomIndex];
    this.borderColor = color;
    this.textColor = color;
  }

}
