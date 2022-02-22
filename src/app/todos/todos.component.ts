import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { todoservice } from '../todo.service';
import { todomodel } from './todos.model';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  title:string='creat a post'
  todosdata:todomodel[]=[];
  Todomadel=new todomodel();
  p: number = 1;

  constructor(private Todoservice:todoservice,private toasterservice:ToastrService) { }

  ngOnInit(): void {
    this.loaddata();
  }
  loaddata(){
    this.Todoservice.getAll().subscribe(response =>{
      this.todosdata=response as todomodel[];
    })
  }
  addpost(){
    this.title='creat a post';
    this.Todomadel=new todomodel();
  }
  viewpost(todo:todomodel){
    this.title="view a post"
    this.Todomadel=todo;
  }
  editpost(todo:todomodel){
this.title="edit a post";
this.Todomadel=todo;
  }
  deletepost(id:number){
    if(confirm("are you sure you want to delete")){
      this.Todoservice.delete(id).subscribe(response =>{
        console.log(response);
      })
    }
    this.loaddata();
  }
  savepost(){
    if(this.Todomadel.id){
      this.Todoservice.update(this.Todomadel.id,this.Todomadel).subscribe(responce=>{
        console.log(responce);
      },
      (error:Response) => {
        if(error.status===404){
          this.toasterservice.error('Resource not found...')
        }
        else if(error.status===400){
          this.toasterservice.error('bad request....')
        }
        else{
          this.toasterservice.error('unexcepted error accured...')
        }
      })
      this.toasterservice.success('post updated successfully...');
    }
    else{
      this.Todoservice.creat(this.Todomadel).subscribe(responce=>{
        console.log(responce);
      },
      (error:Response) => {
        if(error.status===404){
          this.toasterservice.error('Resource not found...')
        }
        else if(error.status===400){
          this.toasterservice.error('bad request...')
        }
        else{
          this.toasterservice.error('unexcepted error accured...')
        }
      })
      this.toasterservice.success('post creat successfully...');
    }
    this.loaddata();
    this.Todomadel=new todomodel();
  }
}
  
