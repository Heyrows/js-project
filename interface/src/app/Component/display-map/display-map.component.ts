import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-display-map',
  templateUrl: './display-map.component.html',
  styleUrls: ['./display-map.component.css']
})
export class DisplayMapComponent implements OnInit {
  slsUri = 'http://192.168.99.100:3100';
  //slsUri = 'http://127.0.0.1:3000';
  listOfVillains = [];
  listOfHeroes = [];
  villainsCapturedCount = 0;

  constructor(private http: HttpClient) {
    setTimeout(() => {
      setInterval(() => {
        this.http.get(this.slsUri + '/getAllVillains').subscribe(res => {
          if(this.listOfVillains.length > res['length']){
            this.villainsCapturedCount += this.listOfVillains.length - res['length'];
          }
          this.listOfVillains = [];
          for(let i = 0; i < res['length']; i += 1){
            this.listOfVillains.push(res[i]);
          }
        });
        this.http.get(this.slsUri + '/getAllHeroes').subscribe(res => {
          this.listOfHeroes = [];
          for(let i = 0; i < res['length']; i += 1){
            this.listOfHeroes.push(res[i]);
          }
        });
      }, 1000);
    }, 2000);
  }

  ngOnInit() {

  }
}
