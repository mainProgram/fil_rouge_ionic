import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivreurService {

  constructor(private http:HttpClient) { }

  public getLivraisonsById(id: number)
  {
    let LIVRAISON_LIVREUR_URL = "https://127.0.0.1:8000/api/livreurs/"+ id +"/livraisons"
    return this.http.get<any>(LIVRAISON_LIVREUR_URL).pipe( catchError(this.handleError))
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
