import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the BanderaPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'BanderaPipe',
})
export class BanderaPipe implements PipeTransform {

   transform(value: string, codigo: string): any {
   
       let urlFlags:string = "http://www.countryflags.io/"+codigo+"/flat/64.png";

       return urlFlags;
     }
}
