import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router:Router, private storage: Storage) 
  { 
  }

  saveId(id: number){  localStorage.setItem("id", ""+id);    }

  getId(){  return localStorage.getItem("id");    }
  
  getToken(): string | null{  return localStorage.getItem("token") }

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
    this.router.navigate(["/home"])
  }

  clearTokenExpired()
  {
    localStorage.removeItem("token");
    this.router.navigate(["/security"])
  }


  // getToken(): Promise<unknown>{  return this.get("token") }
  
  // saveToken(token: any){  this.set("token", token);    }

  // getUser(token: any){  return JSON.parse(atob(token.split(".")[1]))}

  // isLogged(): boolean
  // {
  //   let token = this.get("token")
  //   return !!token
  // }

  // clearToken()
  // {
  //   this.removeItem("token");
  //   this.router.navigate(["/security"])
  // }

  // clearTokenExpired()
  // {
  //   this.removeItem("token");
  //   this.router.navigate(["/security"])
  // }

  // -------------------------------------------------------------STORAGE----------------------------------------------------------------

  // async set(storageKey:string, value: any)
  // {
  //   const encryptedValue = btoa(escape(JSON.stringify(value)))
  //   return await this.storage.set(storageKey, encryptedValue);
  // }

  // async get(storageKey: string)
  // {
  //   return new Promise( resolve => {
  //     this.storage.get(storageKey).then((value) => {
  //       if(value == null)
  //         resolve(false)
  //       else
  //         resolve(JSON.parse(unescape(atob(value))))
  //     });
  //   });
  // }

  // async removeItem(storageKey: string)
  // {
  //   await this.storage.remove(storageKey)
  // }

  // async clear()
  // {
  //   await this.storage.clear();
  // }
}
