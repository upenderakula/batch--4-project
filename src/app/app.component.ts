import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topic = 'SERVAY FORM @T.D';
  viewMode:string='api-data';
  onMenuChange(menu:string){
    this.viewMode=menu;
  }
  
}
