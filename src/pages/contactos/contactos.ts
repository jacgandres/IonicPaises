import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform   } from 'ionic-angular';

import { Contacts } from '@ionic-native/contacts';

@IonicPage()
@Component({
  selector: 'page-contactos',
  templateUrl: 'contactos.html',
})
export class ContactosPage {

  Contactos:any[]=[];

  constructor(public navCtrl: NavController,
      public navParams: NavParams,
      private contacts: Contacts,
      private plataforma: Platform  ) {
  }

  ionViewDidLoad() {
    console.log('Inicializacion de pagina de contactos');

    this.plataforma.ready().then(() => {
       var opts = {
          filter : "M",
          multiple: true,
          hasPhoneNumber:true,
          fields:  [ 'displayName', 'name' ]
        };
       this.contacts.find([ 'displayName', 'name' ],opts).then((foundContacts) => {
          console.log("Entro a contactos");
          this.Contactos=foundContacts;
        }, (error) => {
          console.log(error);
        })
    });
  }

}
