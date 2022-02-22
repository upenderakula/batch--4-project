import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor( private router:Router){

  }

  onsave(){
    console.log(this.name,this.emailaddress,this.mobilenumber,this.password);
    this.router.navigate(['/login form']);
  }
  onChange(inputcontrol:any){
    console.log(inputcontrol.value);
  }
}