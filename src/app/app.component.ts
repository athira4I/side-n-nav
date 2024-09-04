import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { SmoothedLineChartComponent } from './smoothed-line-chart/smoothed-line-chart.component';
import { TrafficBySourcesComponent } from './traffic-by-sources/traffic-by-sources.component';
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LineChartComponent, BarChartComponent, SmoothedLineChartComponent, TrafficBySourcesComponent, HeaderComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment1';
}
