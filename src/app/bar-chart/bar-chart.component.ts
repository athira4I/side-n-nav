import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

@Component({
 selector: 'app-bar-chart',
 standalone:true,
 templateUrl: './bar-chart.component.html',
 styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit, OnDestroy {
 private chart: am4charts.XYChart | undefined;

 constructor(private zone: NgZone) {}

 ngOnInit() {
   this.zone.runOutsideAngular(() => {
     let chart = am4core.create("chartdiv", am4charts.XYChart);

     // Add data
     chart.data = [{
       "category": "Category 1",
       "value": 50
     }, {
       "category": "Category 2",
       "value": 35
     }];

     // Create axes
     let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
     categoryAxis.dataFields.category = "category";

     let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

     // Create series
     let series = chart.series.push(new am4charts.ColumnSeries());
     series.dataFields.valueY = "value";
     series.dataFields.categoryX = "category";

     this.chart = chart;
   });
 }

 ngOnDestroy() {
   this.zone.runOutsideAngular(() => {
     if (this.chart) {
       this.chart.dispose();
     }
   });
 }
}