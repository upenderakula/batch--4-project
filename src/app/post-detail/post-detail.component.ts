import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { apimodel } from '../api-data/api-model';
import { apiservice } from '../api-data/api.sevice';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  Apimodel=new apimodel();
  Userid:number;
  title:string;
  constructor(private Apiservice:apiservice,private activatedRoute:ActivatedRoute) { 

  }

  ngOnInit(): void {
    let id:number=+this.activatedRoute.snapshot.paramMap.get('id');
    this.Userid=+this.activatedRoute.snapshot.queryParamMap.get('Userid');
    this.title=this.activatedRoute.snapshot.queryParamMap.get('title'); 
    this.Apiservice.getByid(id).subscribe(response =>{
      this.Apimodel=response as apimodel;
    })
  }

}
