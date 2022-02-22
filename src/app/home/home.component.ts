import { Component } from "@angular/core";

@Component({
    selector: 'home',
    //template: '<h1>Hello from Home component</h1>',
    templateUrl: './home.component.html',
    //styles: ['.btnStyle{ color : red}', '.txtStyle{height : 25px;width:300px}'],
    styleUrls: ['./home.component.css']
})

export class HomeComponent {
    imgUrl: string = '../assets/upender.jpg';

}