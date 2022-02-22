import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { loginvalidaters } from '../validaters';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent  {

  loginform=new FormGroup({
    email:new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")],loginvalidaters.shouldBeUnique),
    mobile:new FormControl('',[Validators.required,loginvalidaters.cannotContainSpace]),
    password:new FormControl('',[Validators.required,loginvalidaters.cannotContainSpace])
  })

  get Email() {
    return this.loginform.get('email');
}
get mobileNumber() {
    return this.loginform.get('mobile');
}
get Password() {
    return this.loginform.get('password');
}

  

}
