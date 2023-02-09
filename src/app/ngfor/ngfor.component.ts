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

  countries = ['INDIA', 'USA'];
  states : any = '';

  constructor() { }

  ngOnInit() {
  }

  setState(val: any) {
    if (val == "INDIA") {
      this.states = ['Maharashtra', 'Gujrat', 'Rajasthan'];
    }
    if (val == 'USA') {
      this.states = ['California', 'New York', ' Washington'];
    }
  }
}
