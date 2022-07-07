import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterNotes'
})
export class FilterNotesPipe implements PipeTransform {

  transform(value: string | number): string {
    return value ? value.toString() : "N/A";
  }

}
