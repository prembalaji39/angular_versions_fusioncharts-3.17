import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataSource: Object;
  title: string;
  data: Object;
  data1: Object;
  areadata: Object;
  data12: Object;
  rangemeter: object;
  fertility: object;
   
  constructor() {
    this.title = 'Fusion chart 3.17 with Angular 12x';

    this.fertility = {
      chart: {
        caption: "Fertility Rates in Europe - 2015",
        indecimalseparator: ",",
        decimalseparator: ".",
        theme: "fusion",
        showlabels: "0",
        legendposition: "Bottom",
        legendcaption: "Number of children per woman",
        basefontcolor: "#000000",
        entitytooltext:
          "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'><b>$datavalue</b> children per woman</div>",
        entityfillhovercolor: "#BBDEFB"
      },
      colorrange: {
        minvalue: "0.5",
        code: "#5D62B5",
        gradient: "0",
        color: [
          {
            displayvalue: "0.5 - 1.0",
            maxvalue: "1.0",
            code: "#F3726F"
          },
          {
            maxvalue: "1.5",
            displayvalue: "1.0 - 1.5",
            code: "#FFC532"
          },
          {
            maxvalue: "2.5",
            displayvalue: "1.5 - 2.0",
            code: "#61B68E"
          }
        ]
      },
      data: [
        {
          id: "001",
          value: "1,67"
        },
        {
          id: "002",
          value: "0,67"
        },
        {
          id: "003",
          value: "1,49",
          showlabel: "1"
        },
        {
          id: "004",
          value: "1,72",
          showlabel: "1"
        },
        {
          id: "005",
          value: "1,70"
        },
        {
          id: "006",
          value: "1,00"
        },
        {
          id: "007",
          value: "1,50",
          showlabel: "1"
        },
        {
          id: "008",
          value: "1,00"
        },
        {
          id: "044",
          value: "1,02"
        },
        {
          id: "009",
          value: "1,47"
        },
        {
          id: "010",
          value: "1,71",
          showlabel: "1"
        },
        {
          id: "011",
          value: "1,58"
        },
        {
          id: "012",
          value: "1,65",
          showlabel: "1"
        },
        {
          id: "013",
          value: "1,96",
          showlabel: "1"
        },
        {
          id: "014",
          value: "1,50",
          showlabel: "1"
        },
        {
          id: "015",
          value: "1,00",
          showlabel: "1"
        },
        {
          id: "016",
          value: "1,45"
        },
        {
          id: "017",
          value: "1,80",
          showlabel: "1"
        },
        {
          id: "018",
          value: "1,92",
          showlabel: "1"
        },
        {
          id: "019",
          value: "1,35",
          showlabel: "1"
        },
        {
          id: "047",
          value: "0,6"
        },
        {
          id: "020",
          value: "1,50"
        },
        {
          id: "021",
          value: "1,40"
        },
        {
          id: "022",
          value: "1,70"
        },
        {
          id: "023",
          value: "1,47"
        },
        {
          id: "024",
          value: "1,50"
        },
        {
          id: "025",
          value: "1,45"
        },
        {
          id: "026",
          value: "1,00"
        },
        {
          id: "027",
          value: "0,7"
        },
        {
          id: "028",
          value: "1,74"
        },
        {
          id: "029",
          value: "1,66"
        },
        {
          id: "030",
          value: "1,72",
          showlabel: "1"
        },
        {
          id: "031",
          value: "1,2",
          showlabel: "1"
        },
        {
          id: "032",
          value: "0,51",
          showlabel: "1"
        },
        {
          id: "033",
          value: "1,58",
          showlabel: "1"
        },
        {
          id: "046",
          value: "1,70",
          showlabel: "1"
        },
        {
          id: "034",
          value: "0,8"
        },
        {
          id: "035",
          value: "1,06"
        },
        {
          id: "036",
          value: "1,0"
        },
        {
          id: "037",
          value: "1,57"
        },
        {
          id: "038",
          value: "1,33",
          showlabel: "1"
        },
        {
          id: "039",
          value: "1,85",
          showlabel: "1"
        },
        {
          id: "040",
          value: "1,50",
          showlabel: "1"
        },
        {
          id: "045",
          value: "2,00",
          showlabel: "1"
        },
        {
          id: "041",
          value: "1,50",
          showlabel: "1"
        },
        {
          id: "042",
          value: "1,80"
        },
        {
          id: "043",
          value: "0,9"
        }
      ]
    };
    this.rangemeter = {
      chart: {
        caption: "Stats for Germany (FIFA)",
        subcaption: "(1990-2014)",
        charttopmargin: "10",
        theme: "fusion"
      },
      dataset: [
        {
          data: [
            {
              value: "W"
            },
            {
              value: "W"
            },
            {
              value: "D"
            },
            {
              value: "W"
            },
            {
              value: "W"
            },
            {
              value: "W"
            },
            {
              value: "D"
            },
            {
              value: "D"
            },
            {
              value: "W"
            },
            {
              value: "W"
            },
            {
              value: "W"
            },
            {
              value: "D"
            },
            {
              value: "W"
            },
            {
              value: "L"
            },
            {
              value: "D"
            },
            {
              value: "W"
            },
            {
              value: "W"
            },
            {
              value: "W"
            },
            {
              value: "W"
            },
            {
              value: "D"
            },
            {
              value: "D"
            },
            {
              value: "L"
            },
            {
              value: "D"
            },
            {
              value: "L"
            },
            {
              value: "W"
            },
            {
              value: "L"
            },
            {
              value: "w"
            },
            {
              value: "D"
            },
            {
              value: "W"
            },
            {
              value: "D"
            },
            {
              value: "W"
            },
            {
              value: "W"
            },
            {
              value: "L"
            },
            {
              value: "W"
            },
            {
              value: "D"
            },
            {
              value: "W"
            }
          ]
        }
      ]
    };

    this.data12 = {
      chart: {
        caption: "Worldwide CO₂ emissions - 2016",
        subcaption: "Measured in tonnes per year",
        captionalignment: "left",
        theme: "fusion",
        formatnumberscale: "0",
        numbersuffix: " tonns per capita",
        entityfillhovercolor: "#E5E5E9",
        entitytooltext:
          "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black'>$lname</div><div style='font-size:12px; color:black'>$value tonns per capita</div>"
      },
      colorrange: {
        startlabel: "Low",
        endlabel: "High",
        code: "#D7DDFF",
        minvalue: "0",
        gradient: "1",
        color: [
          {
            maxvalue: "150",
            displayvalue: "Average",
            code: "#828FD6"
          },
          {
            maxvalue: "300",
            code: "#36469F"
          }
        ]
      },
      data: [
        {
          id: "NA",
          value: "57.2",
          link: "newchart-json-NA"
        },
        {
          id: "SA",
          value: "57.1",
          link: "newchart-json-SA"
        },
        {
          id: "AS",
          value: "247",
          link: "newchart-json-AS"
        },
        {
          id: "EU",
          value: "188.5",
          link: "newchart-json-EU"
        },
        {
          id: "AF",
          value: "87.2",
          link: "newchart-json-AF"
        },
        {
          id: "AU",
          value: "8.32",
          link: "newchart-json-AU"
        }
      ],
      linkeddata: [
        {
          id: "NA",
          linkedchart: {
            chart: {
              caption: "North America Worldwide CO₂ emissions - 2016",
              subcaption: "Measured in tonnes per year",
              numbersuffix: " tonns per capita",
              captionalignment: "left",
              theme: "fusion",
              formatnumberscale: "0",
              entityfillhovercolor: "#E5E5E9",
              entitytooltext:
                "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black'>$lName</div><div style='font-size:12px;color:black'>$value tonns per capita</div>"
            },
            colorrange: {
              minvalue: "0",
              startlabel: "Low",
              endlabel: "High",
              code: "#D7DDFF",
              gradient: "1",
              color: [
                {
                  maxvalue: 18,
                  displayvalue: "Average",
                  code: "#828FD6"
                },
                {
                  maxvalue: 36,
                  code: "#36469F"
                }
              ]
            },
            data: [
              {
                id: "001",
                value: 5.547
              },
              {
                id: "002",
                value: 6.518
              },
              {
                id: "003",
                value: 4.702
              },
              {
                id: "004",
                value: 1.417
              },
              {
                id: "005",
                value: 15.515
              },
              {
                id: "026",
                value: 9.38
              },
              {
                id: "006",
                value: 1.682
              },
              {
                id: "007",
                value: 3.2
              },
              {
                id: "008",
                value: 2.119
              },
              {
                id: "009",
                value: 2.119
              },
              {
                id: "010",
                value: 1.043
              },
              {
                id: "024",
                value: 9.611
              },
              {
                id: "011",
                value: 2.423
              },
              {
                id: "012",
                value: 1.164
              },
              {
                id: "013",
                value: 0.278
              },
              {
                id: "014",
                value: 1.095
              },
              {
                id: "015",
                value: 2.717
              },
              {
                id: "016",
                value: 3.645
              },
              {
                id: "017",
                value: 0.834
              },
              {
                id: "018",
                value: 2.293
              },
              {
                id: "025",
                value: 0,
                tooltext: "No Data Available"
              },
              {
                id: "019",
                value: 4.378
              },
              {
                id: "020",
                value: 2.416
              },
              {
                id: "021",
                value: 2.007
              },
              {
                id: "022",
                value: 30.059
              },
              {
                id: "023",
                value: 16.438
              }
            ]
          }
        },
        {
          id: "SA",
          linkedchart: {
            chart: {
              caption: "South America CO₂ emissions - 2016",
              subcaption: "Measured in tonnes per year",
              captionalignment: "left",
              theme: "fusion",
              formatnumberscale: "0",
              showlabels: "0",
              numbersuffix: " tonns per capita",
              entityfillhovercolor: "#E5E5E9",
              entitytooltext:
                "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black'>$lName</div><div style='font-size:12px; color:black'>$value tonns per capita</div>"
            },
            colorrange: {
              minvalue: "0",
              startlabel: "Low",
              endlabel: "High",
              code: "#D7DDFF",
              gradient: "1",
              color: [
                {
                  maxvalue: 5,
                  displayvalue: "Average",
                  code: "#828FD6"
                },
                {
                  maxvalue: 10,
                  code: "#36469F"
                }
              ]
            },
            data: [
              {
                id: "001",
                value: 4.764
              },
              {
                id: "002",
                value: 1.938
              },
              {
                id: "003",
                value: 2.347
              },
              {
                id: "004",
                value: 4.868
              },
              {
                id: "005",
                value: 1.739
              },
              {
                id: "006",
                value: 2.464
              },
              {
                id: "007",
                value: 0,
                tooltext: "No Data Available"
              },
              {
                id: "008",
                value: 2.829
              },
              {
                id: "015",
                value: 0,
                tooltext: "No Data Available"
              },
              {
                id: "009",
                value: 2.754
              },
              {
                id: "010",
                value: 0.894
              },
              {
                id: "011",
                value: 2.133
              },
              {
                id: "016",
                value: 2.525
              },
              {
                id: "012",
                value: 3.761
              },
              {
                id: "013",
                value: 2.064
              },
              {
                id: "014",
                value: 5.601
              }
            ]
          }
        },
        {
          id: "AS",
          linkedchart: {
            chart: {
              caption: "Asia CO₂ emissions - 2016",
              subcaption: "Measured in tonnes per year",
              captionalignment: "left",
              theme: "fusion",
              formatnumberscale: "0",
              showlabels: "0",
              numbersuffix: " tonns per capita",
              entityfillhovercolor: "#E5E5E9",
              entitytooltext:
                "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black'>$lName</div><div style='font-size:12px; color:black'>$value tonns per capita</div>"
            },
            colorrange: {
              minvalue: "0",
              startlabel: "Low",
              endlabel: "High",
              code: "#D7DDFF",
              gradient: "1",
              color: [
                {
                  maxvalue: "25",
                  displayvalue: "Average",
                  code: "#828FD6"
                },
                {
                  maxvalue: "50",
                  code: "#36469F"
                }
              ]
            },
            data: [
              {
                id: "001",
                value: 0.338
              },
              {
                id: "002",
                value: 1.966
              },
              {
                id: "003",
                value: 4.119
              },
              {
                id: "060",
                value: 24.509
              },
              {
                id: "005",
                value: 0.506
              },
              {
                id: "006",
                value: 1.416
              },
              {
                id: "007",
                value: 23.701
              },
              {
                id: "008",
                value: 0.46
              },
              {
                id: "009",
                value: 0.48
              },
              {
                id: "010",
                value: 7.363
              },
              {
                id: "012",
                value: 0.418
              },
              {
                id: "013",
                value: 2.525
              },
              {
                id: "050",
                value: 5.914
              },
              {
                id: "014",
                value: 1.836
              },
              {
                id: "015",
                value: 1.918
              },
              {
                id: "016",
                value: 8.17
              },
              {
                id: "054",
                value: 4.529
              },
              {
                id: "063",
                value: 7.776
              },
              {
                id: "019",
                value: 9.521
              },
              {
                id: "062",
                value: 2.734
              },
              {
                id: "021",
                value: 13.011
              },
              {
                id: "022",
                value: 1.993
              },
              {
                id: "023",
                value: 11.618
              },
              {
                id: "061",
                value: 25.813
              },
              {
                id: "025",
                value: 1.662
              },
              {
                id: "026",
                value: 0.309
              },
              {
                id: "064",
                value: 3.934
              },
              {
                id: "051",
                value: 0,
                tooltext: "No Data Available"
              },
              {
                id: "028",
                value: 8.492
              },
              {
                id: "030",
                value: 8.634
              },
              {
                id: "031",
                value: 0.315
              },
              {
                id: "057",
                value: 15.09
              },
              {
                id: "033",
                value: 0.978
              },
              {
                id: "034",
                value: 1.242
              },
              {
                id: "059",
                value: 47.829
              },
              {
                id: "036",
                value: 11.325
              },
              {
                id: "055",
                value: 19.655
              },
              {
                id: "038",
                value: 11.171
              },
              {
                id: "039",
                value: 0.998
              },
              {
                id: "053",
                value: 1.716
              },
              {
                id: "049",
                value: 11.146
              },
              {
                id: "041",
                value: 0.625
              },
              {
                id: "042",
                value: 4.753
              },
              {
                id: "052",
                value: 5.08
              },
              {
                id: "044",
                value: 13.473
              },
              {
                id: "058",
                value: 25.794
              },
              {
                id: "046",
                value: 3.418
              },
              {
                id: "047",
                value: 2.013
              },
              {
                id: "056",
                value: 0.819
              }
            ]
          }
        },
        {
          id: "EU",
          linkedchart: {
            chart: {
              caption: "Europe CO₂ emissions - 2016",
              subcaption: "Measured in tonnes per year",
              captionalignment: "left",
              theme: "fusion",
              formatnumberscale: "0",
              showlabels: "0",
              numbersuffix: " tonns per capita",
              entityfillhovercolor: "#E5E5E9",
              entitytooltext:
                "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black'>$lName</div><div style='font-size:12px; color:black'>$value tonns per capita</div>"
            },
            colorrange: {
              minvalue: "0",
              startlabel: "Low",
              endlabel: "High",
              code: "#D7DDFF",
              gradient: "1",
              color: [
                {
                  maxvalue: "9",
                  displayvalue: "Average",
                  code: "#828FD6"
                },
                {
                  maxvalue: "18",
                  code: "#36469F"
                }
              ]
            },
            data: [
              {
                id: "001",
                value: 2.093
              },
              {
                id: "002",
                value: 6.34
              },
              {
                id: "003",
                value: 7.747
              },
              {
                id: "004",
                value: 6.345
              },
              {
                id: "005",
                value: 8.922
              },
              {
                id: "006",
                value: 6.657
              },
              {
                id: "007",
                value: 6.35
              },
              {
                id: "008",
                value: 4.405
              },
              {
                id: "044",
                value: 6.042
              },
              {
                id: "009",
                value: 9.952
              },
              {
                id: "010",
                value: 6.536
              },
              {
                id: "011",
                value: 12.184
              },
              {
                id: "012",
                value: 8.262
              },
              {
                id: "013",
                value: 5.134
              },
              {
                id: "014",
                value: 9.696
              },
              {
                id: "015",
                value: 6.614
              },
              {
                id: "016",
                value: 4.893
              },
              {
                id: "017",
                value: 10.232
              },
              {
                id: "018",
                value: 8.437
              },
              {
                id: "019",
                value: 5.928
              },
              {
                id: "047",
                value: 0,
                tooltext: "No Data Available"
              },
              {
                id: "020",
                value: 3.8
              },
              {
                id: "021",
                value: 4.248
              },
              {
                id: "022",
                value: 4.578
              },
              {
                id: "023",
                value: 16.467
              },
              {
                id: "024",
                value: 3.805
              },
              {
                id: "025",
                value: 4.165
              },
              {
                id: "026",
                value: 1.453
              },
              {
                id: "027",
                value: 0,
                tooltext: "No Data Available"
              },
              {
                id: "028",
                value: 3.757
              },
              {
                id: "029",
                value: 9.897
              },
              {
                id: "030",
                value: 8.597
              },
              {
                id: "031",
                value: 8.406
              },
              {
                id: "032",
                value: 4.902
              },
              {
                id: "033",
                value: 3.966
              },
              {
                id: "046",
                value: 11.325
              },
              {
                id: "034",
                value: 0,
                tooltext: "No Data Available"
              },
              {
                id: "035",
                value: 5.614
              },
              {
                id: "036",
                value: 6.281
              },
              {
                id: "037",
                value: 6.722
              },
              {
                id: "038",
                value: 5.621
              },
              {
                id: "039",
                value: 4.581
              },
              {
                id: "040",
                value: 4.504
              },
              {
                id: "045",
                value: 5.08
              },
              {
                id: "041",
                value: 5.365
              },
              {
                id: "042",
                value: 5.933
              },
              {
                id: "043",
                value: 0,
                tooltext: "No Data Available"
              }
            ]
          }
        },
        {
          id: "AU",
          linkedchart: {
            chart: {
              caption: "Australia CO₂ emissions - 2016",
              subcaption: "Measured in tonnes per year",
              captionalignment: "left",
              theme: "fusion",
              formatnumberscale: "0",
              showlabels: "0",
              numbersuffix: " tonns per capita",
              entityfillhovercolor: "#E5E5E9",
              entitytooltext:
                "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black'>$value tonns per capita</div>"
            },
            colorrange: {
              minvalue: "0",
              startlabel: "Low",
              endlabel: "High",
              code: "#D7DDFF",
              gradient: "1",
              color: [
                {
                  maxvalue: "1",
                  displayvalue: "Average",
                  code: "#828FD6"
                },
                {
                  maxvalue: "2",
                  code: "#36469F"
                }
              ]
            },
            data: [
              {
                id: "SW",
                value: 2
              },
              {
                id: "NT",
                value: 1.5
              },
              {
                id: "QU",
                value: 0.5
              },
              {
                id: "SA",
                value: 1.5
              },
              {
                id: "TA",
                value: 0.45
              },
              {
                id: "VI",
                value: 0.2
              },
              {
                id: "WA",
                value: 0.7
              }
            ]
          }
        },
        {
          id: "AF",
          linkedchart: {
            chart: {
              caption: "Africa CO₂ emissions - 2016",
              subcaption: "Measured in tonnes per year",
              captionalignment: "left",
              theme: "fusion",
              formatnumberscale: "0",
              showlabels: "0",
              numbersuffix: "tonns per capita",
              entityfillhovercolor: "#E5E5E9",
              entitytooltext:
                "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black'>$value tonns per capita</div>"
            },
            colorrange: {
              minvalue: "0",
              startlabel: "Low",
              endlabel: "High",
              code: "#D7DDFF",
              gradient: "1",
              color: [
                {
                  maxvalue: "5",
                  displayvalue: "Average",
                  code: "#828FD6"
                },
                {
                  maxvalue: "10",
                  code: "#36469F"
                }
              ]
            },
            data: [
              {
                id: "001",
                value: 3.787
              },
              {
                id: "002",
                value: 1.24
              },
              {
                id: "003",
                value: 0.602
              },
              {
                id: "004",
                value: 2.955
              },
              {
                id: "005",
                value: 0.159
              },
              {
                id: "006",
                value: 0.044
              },
              {
                id: "007",
                value: 0.317
              },
              {
                id: "059",
                value: 0,
                tooltext: "No Data Available"
              },
              {
                id: "008",
                value: 0.945
              },
              {
                id: "009",
                value: 0.067
              },
              {
                id: "010",
                value: 0.053
              },
              {
                id: "057",
                value: 0.638
              },
              {
                id: "012",
                value: 0.5
              },
              {
                id: "013",
                value: 0.062
              },
              {
                id: "014",
                value: 0.796
              },
              {
                id: "015",
                value: 2.259
              },
              {
                id: "016",
                value: 4.765
              },
              {
                id: "017",
                value: 0.144
              },
              {
                id: "018",
                value: 0.116
              },
              {
                id: "019",
                value: 2.733
              },
              {
                id: "056",
                value: 0.26
              },
              {
                id: "020",
                value: 0.538
              },
              {
                id: "021",
                value: 0.206
              },
              {
                id: "022",
                value: 0.154
              },
              {
                id: "023",
                value: 0.301
              },
              {
                id: "024",
                value: 1.021
              },
              {
                id: "025",
                value: 0.21
              },
              {
                id: "026",
                value: 9.567
              },
              {
                id: "027",
                value: 0.121
              },
              {
                id: "028",
                value: 0.071
              },
              {
                id: "029",
                value: 0.082
              },
              {
                id: "030",
                value: 0.656
              },
              {
                id: "058",
                value: 3.253
              },
              {
                id: "032",
                value: 1.691
              },
              {
                id: "033",
                value: 0.304
              },
              {
                id: "034",
                value: 1.573
              },
              {
                id: "035",
                value: 0.104
              },
              {
                id: "036",
                value: 0.55
              },
              {
                id: "038",
                value: 0.073
              },
              {
                id: "040",
                value: 0.6
              },
              {
                id: "041",
                value: 0.584
              },
              {
                id: "042",
                value: 5.492
              },
              {
                id: "043",
                value: 0.184
              },
              {
                id: "044",
                value: 0.045
              },
              {
                id: "045",
                value: 8.365
              },
              {
                id: "060",
                value: 0.128
              },
              {
                id: "046",
                value: 0.128
              },
              {
                id: "047",
                value: 0.871
              },
              {
                id: "048",
                value: 0.217
              },
              {
                id: "049",
                value: 0.356
              },
              {
                id: "051",
                value: 2.725
              },
              {
                id: "052",
                value: 0.129
              },
              {
                id: "011",
                value: 0.201
              },
              {
                id: "053",
                value: 0,
                tooltext: "No Data available"
              },
              {
                id: "054",
                value: 0.275
              },
              {
                id: "055",
                value: 0.69
              }
            ]
          }
        }
      ]
    };

    this.areadata = {
      chart: {
        caption: "GDP Growth Rate Comparison",
        yaxisname: "Quarterly GDP Growth Rate in %",
        subcaption: "India vs China",
        drawcrossline: "1",
        numbersuffix: "%",
        plottooltext: "$seriesName's GDP grew $dataValue in $label",
        theme: "fusion"
      },
      categories: [
        {
          category: [
            {
              label: "April 2016"
            },
            {
              label: "July 2016"
            },
            {
              label: "Oct 2016"
            },
            {
              label: "Jan 2017"
            },
            {
              label: "April 2017"
            }
          ]
        }
      ],
      dataset: [
        {
          seriesname: "India",
          data: [
            {
              value: "9.2"
            },
            {
              value: "7.9"
            },
            {
              value: "7.5"
            },
            {
              value: "7"
            },
            {
              value: "6.1"
            }
          ]
        },
        {
          seriesname: "China",
          data: [
            {
              value: "6.7"
            },
            {
              value: "6.7"
            },
            {
              value: "6.7"
            },
            {
              value: "6.8"
            },
            {
              value: "6.9"
            }
          ]
        }
      ]
    };

    this.data1 = {
      chart: {
        caption: "Postal Rates for First Class Stamp",
        subcaption: "United States",
        showhovereffect: "1",
        drawverticaljoints: "1",
        useforwardsteps: "0",
        numberprefix: "$",
        canvaspadding: "5",
        plottooltext: "Stamp rate in $label was <b>$datavalue</b>",
        theme: "fusion"
      },
      categories: [
        {
          category: [
            {
              label: "1975"
            },
            {
              label: "1980"
            },
            {
              label: "1985"
            },
            {
              label: "1990"
            },
            {
              label: "1995"
            },
            {
              label: "2000"
            },
            {
              label: "2005"
            },
            {
              label: "2010"
            },
            {
              label: "2015"
            }
          ]
        }
      ],
      dataset: [
        {
          linethickness: "3",
          data: [
            {
              value: ".10"
            },
            {
              value: ".12"
            },
            {
              value: ".18"
            },
            {
              value: ".20"
            },
            {
              value: ".28"
            },
            {
              value: ".36"
            },
            {
              value: ".42"
            },
            {
              value: ".46"
            },
            {
              value: ".49"
            }
          ]
        }
      ]
    };

    this.data = {
      chart: {
        caption: "App Publishing Trend",
        subcaption: "2012-2016",
        xaxisname: "Years",
        yaxisname: "Total number of apps in store",
        formatnumberscale: "1",
        plottooltext:
          "<b>$dataValue</b> apps were available on <b>$seriesName</b> in $label",
        theme: "fusion"
      },
      categories: [
        {
          category: [
            {
              label: "2012"
            },
            {
              label: "2013"
            },
            {
              label: "2014"
            },
            {
              label: "2015"
            },
            {
              label: "2016"
            }
          ]
        }
      ],
      dataset: [
        {
          seriesname: "iOS App Store",
          data: [
            {
              value: "125000"
            },
            {
              value: "300000"
            },
            {
              value: "480000"
            },
            {
              value: "800000"
            },
            {
              value: "1100000"
            }
          ]
        },
        {
          seriesname: "Google Play Store",
          data: [
            {
              value: "70000"
            },
            {
              value: "150000"
            },
            {
              value: "350000"
            },
            {
              value: "600000"
            },
            {
              value: "1400000"
            }
          ]
        },
        {
          seriesname: "Amazon AppStore",
          data: [
            {
              value: "10000"
            },
            {
              value: "100000"
            },
            {
              value: "300000"
            },
            {
              value: "600000"
            },
            {
              value: "900000"
            }
          ]
        }
      ]
    }

    this.dataSource = {
      chart: {
        caption: 'Countries With Most Oil Reserves [2017-18]',
        subCaption: 'In MMbbl = One Million barrels',
        xAxisName: 'Country',
        yAxisName: 'Reserves (MMbbl)',
        numberSuffix: 'K',
        theme: 'fusion'
      },
      data: [
        { label: 'Venezuela', value: '290' },
        { label: 'Saudi', value: '260' },
        { label: 'Canada', value: '180' },
        { label: 'Iran', value: '140' },
        { label: 'Russia', value: '115' },
        { label: 'UAE', value: '100' },
        { label: 'US', value: '30' },
        { label: 'China', value: '30' }
      ]
    };
  }
}
