import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chield-output',
  templateUrl: './chield-output.component.html',
  styleUrls: ['./chield-output.component.css']
})
export class ChieldOutputComponent implements OnInit {
  @Output() newitemEvent=new EventEmitter();

  constructor() { }
  addnewItem(item:string){
    return this.newitemEvent.emit(item);
  }

  ngOnInit(): void {
  }

}
