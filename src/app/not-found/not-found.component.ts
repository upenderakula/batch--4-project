import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  imgurl:string='../assets/notfound.png';
  constructor() { }

  ngOnInit(): void {
  }

}
