import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class HasRoleGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService, private retour:Router, private tokenService: TokenService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
  {    
    // const isAuthorized =  (!! this.authenticationService.gUser()) ? this.authenticationService.gUser().roles.includes(route.data.role as never) : false;
    const isAuthorized =  (!! this.authenticationService.getUser()) ? this.authenticationService.getUser().roles.includes(route.data.role as never) : false;
    
    if(!isAuthorized)
    {
      this.tokenService.clearToken();
      this.retour.navigate(["/security"])
    }
    
    return isAuthorized
  }
  
}
