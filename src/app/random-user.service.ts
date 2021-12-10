import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  readonly baseURL:string = "https://randomuser.me/api";  // add the readonly attribute



  constructor(
    private http: HttpClient
  ) { }

    getRandomUser() : Observable<any> {
      return this.http.get<any>(this.baseURL + '/');
    }

}
// RxJS = Reactive programming

// sebastian show for a single cell - how to change a color 




