import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private router:Router){ }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
    const Conect = JSON.parse(localStorage.getItem('Conect')|| '[]')  ;
    if (Conect.length ==0) {
      this.router.navigateByUrl('/login');
      return false;
    } else {
      return true; 
    }
       
   
     

  }
  
}
