import { NgModule } from '@angular/core';
import { DomSeguroPipe } from './dom-seguro/dom-seguro';
import { BanderaPipe } from './bandera/bandera';
@NgModule({
	declarations: [DomSeguroPipe,
    BanderaPipe],
	imports: [],
	exports: [DomSeguroPipe,
    BanderaPipe]
})
export class PipesModule {}
