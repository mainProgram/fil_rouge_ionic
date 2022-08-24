import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ICredential, IToken, IUser } from '../models/interfaces';
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

  public login(body : ICredential)
  {
    return(
      this.http.post<IToken>(environment.LOGIN_URL, body).pipe(
        catchError( error => {            
          if(error.status == 401)
            console.log("Login et/ou mot de passe incorrect(s)!")
          return throwError(() => new Error("Login et/ou mot de passe incorrect(s)!"))
        })
      )
    ).subscribe((data) => 
    {
      this.tokenService.saveToken(data.token)  ;  
      this.user = (this.tokenService.getUser(data.token)); 
      (this.hasRole("ROLE_CLIENT")) ?  this.retour.navigate(["/client/catalogue"]) : this.retour.navigate(["/admin/commandes"])
    })
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
}
