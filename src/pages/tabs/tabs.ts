import { Component } from '@angular/core';


import {BusquedaPage,HomePage,ContactosPage} from '../pages.export'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = BusquedaPage;
  tab3Root = ContactosPage;

  constructor() {

  }
}
