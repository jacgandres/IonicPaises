
import { HttpClientModule } from '@angular/common/http'

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import {BusquedaPage} from '../pages/busqueda/busqueda'
import { TabsPage } from '../pages/tabs/tabs';
import {BanderaPipe} from '../pipes/bandera/bandera'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServicioPaisProvider } from '../providers/servicio-pais/servicio-pais';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BusquedaPage,
    TabsPage,
    BanderaPipe
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
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServicioPaisProvider
  ]
})
export class AppModule {}
