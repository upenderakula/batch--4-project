
import { Component, OnInit } from '@angular/core';
import { apimodel } from './api-model';
import { apiservice } from './api.sevice';
import { ToastrService } from 'ngx-toastr'


@Component({
  selector: 'api-data',
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css']
})
export class ApiDataComponent implements OnInit {
  p: number = 1;
  APidata:apimodel[]=[];
  title:string='creat a post';
  ApiModel=new apimodel();
  alertMessage:string='';
  constructor(private Apiservice:apiservice,private toasterservice:ToastrService) {
  
   }
  ngOnInit(): void {
    this.loaddata();
  }
  loaddata(){
    this.Apiservice.getAll().subscribe(
      (response) => {
      this.APidata=response as apimodel[];
      
    },
    (error:Response) => {
      if(error.status===400){
        this.toasterservice.error('Resource not found')
        //excepted error
      
      }
      else{
        //unexcepted error
        this.toasterservice.error('unexcepted error occured')
      }
    })
  }
  addpost(){
    this.title='creat a post';
    this.ApiModel=new apimodel();
    this.alertMessage='';
  }
  viewpost(Api:apimodel){
    this.title='view a post';
    this.ApiModel=Api;
    this.alertMessage='';
  }
  editPost(Api:apimodel){
    this.title='edit a post';
    this.ApiModel=Api;
    this.alertMessage='';
  }
  deletepost(id:number){
    if(confirm("Are you sure you want delete...")){
    this.Apiservice.delete(id).subscribe(
      response => {
      console.log(response);
    },
    (error:Response) =>{
      if(error.status===404){
      
        this.toasterservice.error('Resource not found')
      }
      else{
        this.toasterservice.error('unexcepted error accured..')
      }
    } )
    this.loaddata();
   }
  }
  savePost(){
    if(this.ApiModel.id){
      //update
      this.Apiservice.update(this.ApiModel.id,this.ApiModel).subscribe(
        (response) => {
        console.log(response);
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
      });
      
      //this.alertMessage='post updated successfully...'
      this.toasterservice.success('post updated successfully...');
    }
    else{
      //creat
      this.Apiservice.creat(this.ApiModel).subscribe(
        (response) => {
        console.log(response);
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
      //this.alertMessage='post creat successfully...'
      this.toasterservice.success('post creat successfully...');
    }
    this.loaddata();
    this.ApiModel=new apimodel();
  }

}
