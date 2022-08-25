import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router:Router) { }

  saveId(id: number){  localStorage.setItem("id", ""+id);    }

  getId(){  return localStorage.getItem("id");    }

  saveToken(token: string){  localStorage.setItem("token", token);    }

  getUser(token: string){  return JSON.parse(atob(token.split(".")[1]))}

  isLogged(): boolean
  {
    let token = localStorage.getItem("token")
    return !!token
  }

  clearToken()
  {
    localStorage.removeItem("token");
    this.router.navigate(["/security"])
  }

  clearTokenExpired()
  {
    localStorage.removeItem("token");
    this.router.navigate(["/security"])
  }

  getToken(): string | null{  return localStorage.getItem("token") }

}
