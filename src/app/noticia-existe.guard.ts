import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DAOApp } from './daoapp.service';

@Injectable({
  providedIn: 'root'
})
export class NoticiaExisteGuard implements CanActivate {
  constructor(private dao:DAOApp, private router:Router) {
    
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        let id = route.params['id']
        let comprobar:boolean = this.dao.comprobarIDNoticiaExiste(id)

        if (comprobar==false) {
          this.router.navigate(['notFound'])
          return false;
        }
        else

    return true;
  }
  
}
