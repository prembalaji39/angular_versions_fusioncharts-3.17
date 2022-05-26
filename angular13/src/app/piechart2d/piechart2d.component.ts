import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piechart2d',
  templateUrl: './piechart2d.component.html',
  styleUrls: ['./piechart2d.component.css']
})
export class Piechart2dComponent implements OnInit {
  data;
  constructor() { 
    this.data = {
      chart: {
        caption: "Market Share of Web Servers",
        plottooltext: "<b>$percentValue</b> of web servers run on $label servers",
        showlegend: "1",
        showpercentvalues: "1",
        legendposition: "bottom",
        usedataplotcolorforlabels: "1",
        theme: "fusion"
      },
      data: [
        {
          label: "Apache",
          value: "32647479"
        },
        {
          label: "Microsoft",
          value: "22100932"
        },
        {
          label: "Zeus",
          value: "14376"
        },
        {
          label: "Other",
          value: "18674221"
        }
      ]
    };
  }

  ngOnInit(): void {
  }

}
