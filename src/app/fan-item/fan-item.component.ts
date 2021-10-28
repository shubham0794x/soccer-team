import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import {Fan} from '../models/fan.model';

@Component({
  selector: 'app-fan-item',
  templateUrl: './fan-item.component.html',
  styleUrls: ['./fan-item.component.css']
})
export class FanItemComponent implements OnInit {

  //
  @Input() fan!:Fan;

  @Output() fanRemoved: EventEmitter<number> = new EventEmitter();

  // way to emit custom event 

  @Input() position!:number;

  constructor() { }

  ngOnInit(): void {
  }

  removeFan(position:number):void{
    this.fanRemoved.emit(position);
  }


}
