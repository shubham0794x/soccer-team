import { Component, OnInit } from '@angular/core';
import { Fan } from '../models/fan.model';


@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
// Parent Component
export class TeamListComponent implements OnInit {

  fanName: string;
  fanAge: number;
  fanCountry: string;
  selectedTeam: string;

  madridFanList : Array<Fan>;
  barcelonaFanList: Array<Fan>;

  constructor() {
    this.fanName = '';
    this.fanAge = 0;
    this.fanCountry = '';
    this.selectedTeam = '';
    this.madridFanList = [ new Fan('Adam', 31, 'Spain'), new Fan('Adam2', 31, 'Spain') ];
    this.barcelonaFanList = [ new Fan('Vince', 28, 'Portugal'),  new Fan('Vince2', 28, 'Portugal')];
   }

  ngOnInit(): void {
  }

  addNewFan():void {
    const fan:Fan = new Fan(this.fanName, this.fanAge, this.fanCountry);

    if(this.selectedTeam === 'madrid'){
      this.madridFanList.push(fan);
    }else{
      this.barcelonaFanList.push(fan);
    }

    //Reset Values
    this.fanName = '';
    this.fanAge = 0;
    this.fanCountry = '';

  }
  
  removeFan(index: number, team: string): void {
    if (team === 'madrid') {
      this.madridFanList.splice(index, 1);
    } else {
      this.barcelonaFanList.splice(index, 1);
    }
  }





}
