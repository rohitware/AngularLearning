import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  namesearch: string = '';
  productArr: any[] = [
    {
      sno: 1,
      name: 'Mobile',
      price: 47000,
      availibilty: 'Available'
    },
    {
      sno: 2,
      name: 'TV',
      price: 147000,
      availibilty: 'Available'
    },
    {
      sno: 3,
      name: 'Watch',
      price: 7000,
      availibilty: 'Not Available'
    },
    {
      sno: 4,
      name: 'Laptop',
      price: 75000,
      availibilty: 'Available'
    }

  ]
  constructor() { }

  ngOnInit() {
  }

}
