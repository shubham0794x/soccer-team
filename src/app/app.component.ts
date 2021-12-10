import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  

  constructor(public translate:TranslateService){
    translate.addLangs(['en','fr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();

    console.log("check the browserlang", browserLang, browserLang == 'en');

    translate.use(browserLang == 'en' ? browserLang :'en');  
  }
   
  title = 'soccer-fan';
}
