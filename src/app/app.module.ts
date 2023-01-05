import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//para no escribir esto de abajo simplemente lo agregamos en el declarations y se completa solo
import { EmpleadosComponent } from './empleados/empleados.component';

import { EmpleadoComponent } from './empleado/empleado.component';
import { ComponenteEnLineaComponent } from './componente-en-linea/componente-en-linea.component';

//importo en declarations mi componente que en mi caso es empleados:.:

@NgModule({
  declarations: [
    AppComponent,EmpleadosComponent, EmpleadoComponent, ComponenteEnLineaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
