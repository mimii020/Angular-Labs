import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input() color: string = '';
  @Output() changeParentColor: EventEmitter<string> = new EventEmitter<string>();
  myFavoriteColor: string = 'pink';

  resetColor(): void {
    this.changeParentColor.emit(this.myFavoriteColor);
  }
}
