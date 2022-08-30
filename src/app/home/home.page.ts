import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public myImagePath = "https://images.unsplash.com/photo-1530554764233-e79e16c91d08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2VsY29tZSUyMGJ1cmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";

  public sliderOptions = {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
      initialSlide: 0
    }
  };

  public erroMessage = ""

  public reactiveForm: FormGroup

  public get f(){  return this.reactiveForm.controls }

  public onSubmit(){  
    let form = this.reactiveForm.value;
    console.log(form);
    // console.log( this.authenticationService.login(form)); 
  }

  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService) 
  {
    this.reactiveForm = this.formBuilder.group(
      {
        email: new FormControl('', Validators.compose([
            Validators.required,
            Validators.email
          ]),
        ),
        password: new FormControl('', Validators.compose([
            Validators.required, 
          ]
        )),
      }
    )
  }

}
