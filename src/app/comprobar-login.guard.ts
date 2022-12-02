import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Servicio } from './servicio.service';

@Injectable({
  providedIn: 'root'
})
export class ComprobarLoginGuard implements CanActivate {
  constructor(private servicio:Servicio, private router:Router) {
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.servicio.UsuarioConectado==null) {
        alert("No puedes estar aquí sin logearte, se te enviará al login")
        this.router.navigate([''])
        return false;
      } 
      else return true;  
    
  }
  
}
