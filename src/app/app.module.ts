import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import {HttpClientModule} from '@angular/common/http';
import { library, icon } from '@fortawesome/fontawesome-svg-core';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent} from './componentes/educacion/educacion.component';
import { SkillsComponent} from './componentes/skills/skills.component';
import { ProyectosComponent} from './componentes/proyectos/proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    IniciarSesionComponent,
    EncabezadoComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    ExperienciaComponent
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
