import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  names:string[]=['upender','amulya','anjaiah','laxmi'];

  constructor() { }
  additem(item:any){
    this.names.push(item);

  }

  ngOnInit(): void {
  }

}
