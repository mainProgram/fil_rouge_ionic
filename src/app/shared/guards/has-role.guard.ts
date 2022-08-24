import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HasRoleGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService, private retour:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
  {

    const isAuthorized =  (!! this.authenticationService.user) ? this.authenticationService.user.roles.includes(route.data.role as never) : false;

    if(!isAuthorized)
      this.retour.navigate(["/auth/connexion"])
    
    return isAuthorized
  }
  
}
