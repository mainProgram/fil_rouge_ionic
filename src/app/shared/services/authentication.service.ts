import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IToken, IUser } from '../models/interfaces';
import { TokenService } from './token.service';
import { Router } from '@angular/router';
import { throwError, } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public user: IUser

  constructor(private http:HttpClient, private tokenService: TokenService, private retour:Router) {   }

  public hasRole(role: string){ return this.user.roles.includes(role as never); }

  public login(body : any)
  {
    return this.http.post<IToken>(environment.LOGIN_URL, body)
  }

  public inscription(body: IUser)
  {
    return this.http.post<IUser>(environment.INSCRIPTION_URL, body).subscribe(
    {
      next: data => { 
        console.log(data);
        this.retour.navigate(["/security"])
      },
      error: () => catchError(this.handleError),
    });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  public getUser() {
    return this.user = (this.tokenService.getUser(this.tokenService.getToken())); 

    // this.tokenService.getToken().then(data => {
    //   let token = data
    //   this.user = this.tokenService.getUser(token)        
    // })
  }

  // public gUser(){
  //   this.getUser()
  //   console.log(this.user);
  //   return this.user
  // }
}
