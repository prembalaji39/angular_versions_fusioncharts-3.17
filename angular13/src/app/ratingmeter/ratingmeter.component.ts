import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ratingmeter',
  templateUrl: './ratingmeter.component.html',
  styleUrls: ['./ratingmeter.component.css']
})
export class RatingmeterComponent implements OnInit {
rangemeter;
  constructor() { 
    this.rangemeter = {
      chart: {
        caption: "Nordstorm's Customer Satisfaction Score for 2017",
        lowerlimit: "0",
        upperlimit: "100",
        showvalue: "1",
        numbersuffix: "%",
        theme: "fusion",
        showtooltip: "0"
      },
      colorrange: {
        color: [
          {
            minvalue: "0",
            maxvalue: "50",
            code: "#F2726F"
          },
          {
            minvalue: "50",
            maxvalue: "75",
            code: "#FFC533"
          },
          {
            minvalue: "75",
            maxvalue: "100",
            code: "#62B58F"
          }
        ]
      },
      dials: {
        dial: [
          {
            value: "81"
          }
        ]
      }
    };
  }
  ngOnInit(): void {
  }

}
