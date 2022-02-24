import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topic = 'SERVAY FORM @T.D';
  viewMode:string='api-data';
  constructor(private router:Router){

  }
  onMenuChange(menu:string){
    this.viewMode=menu;
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/home']);
  }
  
}
