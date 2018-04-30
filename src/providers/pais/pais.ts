
import { Injectable } from '@angular/core';

@Injectable()
export class Pais  {
  IdPais:number;
   Nombre:string;
   Codigo:string;
   urlFlags:string;
  constructor( ) {
    console.log('Hello Pais Provider');
  }

}
