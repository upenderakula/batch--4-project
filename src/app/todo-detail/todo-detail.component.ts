import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { todoservice } from '../todo.service';
import { todomodel } from '../todos/todos.model';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  Todomodel=new todomodel();

  constructor( private Todoservice:todoservice,private activateroute:ActivatedRoute) {

   }

  ngOnInit(): void {
    let id:number=+this.activateroute.snapshot.paramMap.get('id')
    this.Todoservice.getByid(id).subscribe(response =>{
      this.Todomodel=response as todomodel;
    })
  }

}
