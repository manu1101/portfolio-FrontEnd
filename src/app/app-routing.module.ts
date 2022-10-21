import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IniciarSesionComponent} from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent} from './componentes/portfolio/portfolio.component';
import { GuardGuard } from './servicios/guard.guard';

const routes: Routes = [
  {path: 'iniciar-sesion', component:IniciarSesionComponent},
  {path: 'portfolio', component:PortfolioComponent, canActivate:[GuardGuard]},
  {path: '', redirectTo:'portfolio', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }