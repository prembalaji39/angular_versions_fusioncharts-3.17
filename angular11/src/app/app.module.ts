import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FusionChartsModule } from 'angular-fusioncharts';

// Load FC Library
import * as Maps from 'fusioncharts/fusioncharts.maps';
import * as Widgets from 'fusioncharts/fusioncharts.widgets';
import * as PowerCharts from 'fusioncharts/fusioncharts.powercharts';
import * as World from 'fusioncharts/maps/fusioncharts.world';
import * as TimeSeries from 'fusioncharts/fusioncharts.timeseries';
import * as Gantt from 'fusioncharts/fusioncharts.gantt';
import * as TreeMap from 'fusioncharts/fusioncharts.treemap';

// Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';
import * as charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { Column2dComponent } from './column2d/column2d.component';
import { SimplebarComponent } from './simplebar/simplebar.component';
import { SimplelineComponent } from './simpleline/simpleline.component';
import { Piechart2dComponent } from './piechart2d/piechart2d.component';
import { SimplebubbleComponent } from './simplebubble/simplebubble.component';
import { ScatterComponent } from './scatter/scatter.component';
import { ParetoComponent } from './pareto/pareto.component';
import { RatingmeterComponent } from './ratingmeter/ratingmeter.component';
import { SimpleganttComponent } from './simplegantt/simplegantt.component';
import { TreemapComponent } from './treemap/treemap.component';
import { RadarComponent } from './radar/radar.component';
import { MultipleseriestimeComponent } from './multipleseriestime/multipleseriestime.component';
import { InteractivecandleComponent } from './interactivecandle/interactivecandle.component';
import { ChordComponent } from './chord/chord.component';
import { WorldmapComponent } from './worldmap/worldmap.component';

// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(
  FusionCharts,
  Maps,
  World,
  Widgets,
  TimeSeries,
  charts,
  FusionTheme,
  PowerCharts,
  Gantt,
  TreeMap
);
@NgModule({
  declarations: [
    AppComponent,
    Column2dComponent,
    SimplebarComponent,
    SimplelineComponent,
    Piechart2dComponent,
    SimplebubbleComponent,
    ScatterComponent,
    ParetoComponent,
    RatingmeterComponent,
    SimpleganttComponent,
    TreemapComponent,
    RadarComponent,
    MultipleseriestimeComponent,
    InteractivecandleComponent,
    ChordComponent,
    WorldmapComponent,
  ],
  imports: [BrowserModule, FusionChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
