import { Component, OnInit } from '@angular/core';
import { coursesModel } from './courses.details';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  coursesModel=new coursesModel();

  ngOnInit(): void {
    this.coursesModel.nameofcourse='complete angular course';
    this.coursesModel.employeename='upender akula';
    this.coursesModel.fee=10000,
    this.coursesModel.duration='3 months';
    this.coursesModel.salary=20000;
  }

}
