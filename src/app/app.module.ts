
import { HttpClientModule } from '@angular/common/http'

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {BusquedaPage,HomePage,TabsPage,ContactosPage} from '../pages/pages.export'
import {BanderaPipe} from '../pipes/bandera/bandera'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServicioPaisProvider } from '../providers/servicio-pais/servicio-pais';


import { Contacts } from '@ionic-native/contacts';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BusquedaPage,
    TabsPage,
    BanderaPipe,
    ContactosPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BusquedaPage,
    TabsPage,
    ContactosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServicioPaisProvider,
    Contacts  
  ]
})
export class AppModule {}
