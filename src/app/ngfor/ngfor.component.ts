import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  title: string = 'Top 3 Bolywood Movies'
  movies: Movie[] = [
    { title: '3 Iditos', director: 'Raju ', cast: 'Amir', releaseDate: '2009' },
    { title: 'Tumba', director: 'Rahi', cast: 'Rahi', releaseDate: '2020' },
    { title: 'Kantara', director: 'Rishabh', cast: 'Rishabh', releaseDate: '2022' },
  ];

  countries:any;

  // indStates= ['Maharashtra', 'Gujrat', 'Rajshatan'];
  // usaStates = ['California', 'New York', ' Washington'];
  states: any;

  constructor() { }

  ngOnInit() {
  }
  setState() {
    if (this.countries == "INDIA") {
      this.states = ['Maharashtra', 'Gujrat', 'Rajasthan'];
    }
    if (this.countries == 'USA') {
      this.states = ['California', 'New York', ' Washington'];
    }
  }
}
