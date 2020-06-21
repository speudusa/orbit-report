import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];
  
  constructor() {
    this.sourceList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';

    window.fetch(satellitesUrl).then(function(response) {
      response.json().then(function(data) {

         let fetchedSatellites = data.satellites;

        
        
        for(let i = 0; i < fetchedSatellites.length; i++) {
          let satellite =   
            new Satellite (
              this.name = fetchedSatellites[i].name,
              this.type = fetchedSatellites[i].type, 
              this.launchDate = fetchedSatellites[i].launchDate,
              this.orbitType = fetchedSatellites[i].orbitType,
              this.operational = fetchedSatellites[i].operational,
            );

            this.sourceList.push(satellite);

        }
      }.bind(this));
    }.bind(this));
  }
}