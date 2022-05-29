import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IniciarSesionComponent} from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent} from './componentes/portfolio/portfolio.component';

const routes: Routes = [
  {path: 'iniciar-sesion', component:IniciarSesionComponent},
  {path: 'portfolio', component:PortfolioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }