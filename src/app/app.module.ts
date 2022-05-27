import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import {HttpClientModule} from '@angular/common/http';
import { library, icon } from '@fortawesome/fontawesome-svg-core';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';

@NgModule({
  declarations: [
    AppComponent,
    IniciarSesionComponent,
    EncabezadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
