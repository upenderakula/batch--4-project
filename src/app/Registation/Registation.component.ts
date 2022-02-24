import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'Registation',
  templateUrl: './Registation.component.html',
  styleUrls: ['./Registation.component.css']
})
export class Registationcomponent {
  title = 'Registation';
  isActive:boolean=false;
  name:string='upender';
  emailaddress:string='upenderakula@gmail.com';
  mobilenumber:string='9502201587';
  password:string='kkmmkk';

  constructor( private router:Router,private tosterservice:ToastrService){

  }

  onsave(){
    console.log(this.name,this.emailaddress,this.mobilenumber,this.password);
    this.router.navigate(['/login form']);
    this.tosterservice.success('registation successfull');
  }
  
  onChange(inputcontrol:any){
    console.log(inputcontrol.value);
  }
  
}