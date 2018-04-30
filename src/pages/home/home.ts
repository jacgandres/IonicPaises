import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {ServicioPaisProvider} from '../../providers/servicio-pais/servicio-pais';
import {Pais} from '../../providers/pais/pais';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  Paises:Pais[];
  constructor(public navCtrl: NavController, public _servicio:ServicioPaisProvider ) {

    this.GetTodosLosPaises();
  }

      GetTodosLosPaises()
      {
            this._servicio.obtenerPaises().subscribe( result => {
           
                this.Paises = result;
              });
      }
}
