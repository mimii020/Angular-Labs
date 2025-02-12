import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage',
  standalone: true
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: string): string {
    let defaultImagePath = "/assets/defaultImage.jpg"
    if (value === '' || value.trim() === '') {
      return defaultImagePath;
    }
    return value;
  }

}
