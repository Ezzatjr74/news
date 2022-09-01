import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cut'
})
export class CutPipe implements PipeTransform {

  transform(desc:string): unknown {
    return desc.substring(0,70)
  }

}
