import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService} from 'src/app/servicios/autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private autenticacionServicio:AutenticacionService, private rutas:Router)
  {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let currentUser = this.autenticacionServicio.UsuarioAutenticado;
      if(currentUser && currentUser.accessToken){
        return true;
      }
      else{
        this.rutas.navigate(['/iniciar-sesion']);
        return false;
      }
  }
  
}
