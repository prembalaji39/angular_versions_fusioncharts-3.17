import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pareto',
  templateUrl: './pareto.component.html',
  styleUrls: ['./pareto.component.css']
})
export class ParetoComponent implements OnInit {
  data;
  constructor() {
    this.data = {
      chart: {
        caption: " Top Hardware Defects Frequency",
        subcaption: "Last year - ACME Computers",
        theme: "fusion",
        yaxisname: "# reported instances",
        syaxisname: "% of total instances",
        decimals: "1",
        drawcrossline: "1"
      },
      data: [
        {
          label: "Hard-Disk",
          value: "40"
        },
        {
          label: "PCB",
          value: "22"
        },
        {
          label: "Printer",
          value: "12"
        },
        {
          label: "CDROM",
          value: "10"
        },
        {
          label: "Keyboard",
          value: "6"
        }
      ]
    };
   }

  ngOnInit(): void {
  }

}
