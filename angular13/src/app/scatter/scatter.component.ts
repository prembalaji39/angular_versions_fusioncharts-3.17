import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scatter',
  templateUrl: './scatter.component.html',
  styleUrls: ['./scatter.component.css']
})
export class ScatterComponent implements OnInit {
data;
  constructor() { 
    this.data = {
      chart: {
        caption: "Revenue Forecast for MyBigApp",
        yaxisname: "Revenue (In USD)",
        halfverticalerrorbar: "0",
        theme: "fusion",
        numberprefix: "$",
        showlegend: "0",
        plottooltext:
          "Revenue forecast for month of <b>$label</b> is <b>$datavalue</b>"
      },
      categories: [
        {
          category: [
            {
              label: "Jan",
              x: "20"
            },
            {
              label: "Feb",
              x: "30"
            },
            {
              label: "Mar",
              x: "40"
            },
            {
              label: "Apr",
              x: "50"
            },
            {
              label: "May",
              x: "60"
            },
            {
              label: "Jun",
              x: "70"
            },
            {
              label: "Jul",
              x: "80"
            },
            {
              label: "Aug",
              x: "90"
            },
            {
              label: "Sep",
              x: "100"
            },
            {
              label: "Oct",
              x: "110"
            },
            {
              label: "Nov",
              x: "120"
            },
            {
              label: "Dec",
              x: "130"
            }
          ]
        }
      ],
      dataset: [
        {
          anchorradius: "8",
          anchorbgcolor: "#1aaf5d",
          data: [
            {
              y: "450000",
              x: "20",
              verticalerrorvalue: "50000"
            },
            {
              y: "860000",
              x: "30",
              verticalerrorvalue: "69000"
            },
            {
              y: "750000",
              x: "40",
              verticalerrorvalue: "69000"
            },
            {
              y: "570000",
              x: "50",
              verticalerrorvalue: "60000"
            },
            {
              y: "910000",
              x: "60",
              verticalerrorvalue: "50000"
            },
            {
              y: "580000",
              x: "70",
              verticalerrorvalue: "55000"
            },
            {
              y: "610000",
              x: "80",
              verticalerrorvalue: "87000"
            },
            {
              y: "620000",
              x: "90",
              verticalerrorvalue: "45000"
            },
            {
              y: "520000",
              x: "100",
              verticalerrorvalue: "59000"
            },
            {
              y: "530000",
              x: "110",
              verticalerrorvalue: "72000"
            },
            {
              y: "950000",
              x: "120",
              verticalerrorvalue: "69000"
            },
            {
              y: "770000",
              x: "130",
              verticalerrorvalue: "69000"
            }
          ]
        }
      ]
    };
  }

  ngOnInit(): void {
  }

}
