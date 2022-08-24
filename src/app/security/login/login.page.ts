import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService) 
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

  public erroMessage = ""

  public reactiveForm: FormGroup

  public get f(){  return this.reactiveForm.controls }

  
  ngOnInit() {
  }

  public onSubmit(){  
    let form = this.reactiveForm.value;
    // console.log(form);
    console.log( this.authenticationService.login(form)); 
  }

}
