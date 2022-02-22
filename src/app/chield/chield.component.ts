import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chield',
  templateUrl: './chield.component.html',
  styleUrls: ['./chield.component.css']
})
export class ChieldComponent  {
  @Input('nameofperson') nameofperson:string;
  
  }

