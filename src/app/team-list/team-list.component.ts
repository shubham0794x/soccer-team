import { Component, OnInit } from '@angular/core';
import { Fan } from '../models/fan.model';
import { RandomUserResponse } from '../models/random-user.model';
import { RandomUserService } from '../random-user.service';


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

  constructor( private randomUserService: RandomUserService) {
    this.fanName = '';
    this.fanAge = 0;
    this.fanCountry = '';
    this.selectedTeam = '';
    this.madridFanList = [ new Fan('Adam', 31, 'Spain') ];
    this.barcelonaFanList = [ new Fan('Vince', 28, 'Portugal')];
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
  
  removeFan(position: number, team: string): void {
    if (team === 'madrid') {
      this.madridFanList.splice(position, 1);
    } else {
      this.barcelonaFanList.splice(position, 1);
    }
  }


//child component emits event/data & all the logic is handled by parent component 

   addRandomFan(team:string):void {

     this.randomUserService.getRandomUser().subscribe(apiResponse => {

        const randomUserResponse: RandomUserResponse = apiResponse;  

        const name: string = randomUserResponse.results[0].name.first + ' ' + randomUserResponse.results[0].name.last;
        const age: number = randomUserResponse.results[0].dob.age;
        const country: string = randomUserResponse.results[0].location.country;
        const picture: string = randomUserResponse.results[0].picture.large;

        if (team === 'madrid') {   // adding Dynamically to the respective teams 

          this.madridFanList.push( new Fan(name, age, country, picture));
        } else {
          this.barcelonaFanList.push( new Fan(name, age, country, picture));
        }

     });
     
   }
}
