import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import {ServicioPaisProvider} from '../../providers/servicio-pais/servicio-pais';
import {Pais} from '../../providers/pais/pais';


@IonicPage()
@Component({
  selector: 'page-busqueda',
  templateUrl: 'busqueda.html',
})
export class BusquedaPage {
  InicialesPais:string="";
  Paises:Pais[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public _servicio:ServicioPaisProvider) {
  }

  ionViewDidLoad() {
    console.log('BusquedaPage');
  }

  obtenerPaisesPorNombre()
  {
    if(this.InicialesPais.length>=2){
        this._servicio.obtenerPaisesPorNombre(this.InicialesPais).subscribe( result => {
            console.log("Paises encontrados: "+result.length)
            this.Paises = result;
          });
        }
    else{
      this.Paises = [];
      console.log("Iniciales Pais:"+this.InicialesPais);
    }
  }
}
