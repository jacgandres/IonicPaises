import { Component } from '@angular/core';

import { BusquedaPage } from '../busqueda/busqueda';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = BusquedaPage; 

  constructor() {

  }
}
