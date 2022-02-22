import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'servay-form-reactive',
  templateUrl: './servay-form-reactive.component.html',
  styleUrls: ['./servay-form-reactive.component.css']
})
export class ServayFormReactiveComponent  {

 ServayForm=new FormGroup({
   firstname:new FormControl('',Validators.required),
    fathername:new FormControl('',Validators.required),
    email:new FormControl('',Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")),
    mobile:new FormControl('',Validators.required),
    date:new FormControl('',Validators.required)
 })

}
