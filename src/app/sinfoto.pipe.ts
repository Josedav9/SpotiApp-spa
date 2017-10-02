import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(value:Array<any>): string {
    let noimagen = "assets/img/noimage.png"
    if( !value ){
      return noimagen
    }else if(value.length>1){
      return value[1].url
    }else{
      return noimagen
    }
  }

}
