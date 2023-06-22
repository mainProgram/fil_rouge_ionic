import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { IUser } from 'src/app/shared/models/interfaces';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { TokenService } from 'src/app/shared/services/token.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  constructor(
    private formBuilder: FormBuilder, 
    private authenticationService: AuthenticationService, 
    private tokenService: TokenService, 
    private retour:Router,
    private userService: UserService,
    private navCtrl: NavController
  ) 
  { 
    this.reactiveForm = this.formBuilder.group(
      {
        email: new FormControl('', Validators.compose(
          [
            Validators.required,
            Validators.email
          ]
        ),),
        password: new FormControl('', Validators.compose(
          [
            Validators.required, 
          ]
        )),
      }
    )
  }
  public user: IUser

  public erroMessage = ""

  public reactiveForm: FormGroup

  public get f(){  return this.reactiveForm.controls }
  
  ngOnInit() {
  }

  public hasRole(role: string){ return this.user.roles.includes(role as never); }

  public onSubmit(){  
    let form = this.reactiveForm.value;

    this.authenticationService.login(form).subscribe({
      next: (data) => 
      {
        this.tokenService.saveToken(data.token)  ;  
        this.user = (this.tokenService.getUser(data.token)); 
        console.log(this.user);
        
        this.userService.getuserId().then(data => {
          this.tokenService.saveId(data);
        })

        if(this.hasRole("ROLE_CLIENT"))  
          this.navCtrl.navigateForward("/client/catalogue")
          // this.retour.navigate(["/client/catalogue"]) 
        else 
          if (this.hasRole("ROLE_LIVREUR"))
            this.navCtrl.navigateForward("/livreur/livraisons")
            // this.retour.navigate(["/livreur/livraisons"])

        this.reactiveForm.reset();
      },
      error: (error) => 
      {         
        if(error.status == 401)
        {
          this.erroMessage = ("Login et/ou mot de passe incorrect(s)!")
        }
      }
    })
    ; 
  }

  public goSomewhere(where){
    this.navCtrl.navigateForward(where);
  }

}
