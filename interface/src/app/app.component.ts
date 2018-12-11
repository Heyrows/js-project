import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  slsUri = 'http://serverless:3100'; // 'http://127.0.0.1:3000';
  listOfVillains = [];
  listOfHeroes = [];

  constructor(private http: HttpClient) {

    setTimeout(() => {
      setInterval(() => {
        this.http.get(this.slsUri + '/getAllVillains').subscribe(res => {
          for(let i = 0; i < res['length']; i += 1){
            this.listOfVillains.push(res[i]);
          }
        });
        this.http.get(this.slsUri + '/getAllHeroes').subscribe(res => {
          for(let i = 0; i < res['length']; i += 1){
            this.listOfHeroes.push(res[i]);
          }
        });
      }, 1000);
    }, 5000);
  }
}
