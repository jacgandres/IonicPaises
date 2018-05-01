import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import {forEach} from '@angular/router'

import 'rxjs/add/operator/map';

import {Pais} from '../../providers/pais/pais'
/*
  Generated class for the ServicioPaisProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicioPaisProvider {
  Paises:any[] = []

  urlService:string = "http://jacgandres050780-001-site1.ctempurl.com/api/paiswebapi?type=json";
  urlServiceByName:string="http://jacgandres050780-001-site1.ctempurl.com/api/paiswebapi/GetPaisesPorNombre?type=json&nombre="

  constructor( private http: HttpClient ) {
    console.log('Hello ServicioPaisProvider Provider');
  }

    obtenerPaises(){
      let urlFormateada =  this.urlService ;
      return this.http.get<Pais[]>(urlFormateada).map((result:any)=>
           {
             this.Paises = result;
             return this.Paises;
           });
    }

     obtenerPaisesPorNombre(nombrePais:string)
    {
        return this.http.get<Pais[]>(this.urlServiceByName+nombrePais).map((result:any)=>
            {
              this.Paises = result;
              return this.Paises;
            });
    }
}
