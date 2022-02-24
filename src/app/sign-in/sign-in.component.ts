import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent  {
  emailaddress:string='upenderakula202@gmail.com';
  password:string='12345';

  constructor(private tosterservice:ToastrService) { }

  signin(){
    let userinfo=[{email:'upenderakula@gmail.com',Password:'12345',isAdmin:false},{email:'upender@gmail.com',Password:'123',isAdmin:true}]
    let filteruser=userinfo.filter(x =>x.email===this.emailaddress && x.Password==this.password);
    if(filteruser && filteruser.length >0){
      localStorage.setItem('isAuthenticated','True');
      if(filteruser[0].isAdmin){
        localStorage.setItem('isAdmin','True');
      }
      this.tosterservice.success('signin sucessfull..');
    }
    else{
      this.tosterservice.error('invalid credencials');
    }
  }

}
