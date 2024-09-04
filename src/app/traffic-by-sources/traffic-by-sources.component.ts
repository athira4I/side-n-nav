// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-traffic-by-sources',
//   standalone: true,
//   imports: [],
//   templateUrl: './traffic-by-sources.component.html',
//   styleUrl: './traffic-by-sources.component.css'
// })
// export class TrafficBySourcesComponent {

// }

import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

@Component({
  standalone: true,
  selector: 'app-traffic-by-sources',
  templateUrl: './traffic-by-sources.component.html',
  styleUrls: ['./traffic-by-sources.component.css']
})
export class TrafficBySourcesComponent implements OnInit, OnDestroy {
  private root!: am5.Root;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    // Create root element and apply themes
    this.root = am5.Root.new(this.elRef.nativeElement);

    this.root.setThemes([
      am5themes_Animated.new(this.root)
    ]);

    // Create chart
    let chart = this.root.container.children.push(am5xy.XYChart.new(this.root, {
      panX: true,
      panY: true,
      wheelX: "panX",
      wheelY: "zoomX",
      pinchZoomX: true,
      layout: this.root.verticalLayout
    }));

    // Create X-axis
    let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(this.root, {
      categoryField: "source",
      renderer: am5xy.AxisRendererX.new(this.root, {
        minGridDistance: 20
      })
    }));

    // Create Y-axis
    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(this.root, {
      renderer: am5xy.AxisRendererY.new(this.root, {})
    }));

    // Define the data
    let data = [
      { source: "Firewall", logs: 220 },
      { source: "DNS server", logs: 210 },
      { source: "Operating system", logs: 230 },
      { source: "Switch", logs: 215 },
      { source: "Application", logs: 220 },
      { source: "Code Versioning System", logs: 225 }
    ];

    // Add multiple line series
    this.createSeries(chart, xAxis, yAxis, "Firewall", data, "logs", "#fdd400");
    this.createSeries(chart, xAxis, yAxis, "DNS server", data, "logs", "#cc0000");
    this.createSeries(chart, xAxis, yAxis, "Operating system", data, "logs", "#00cc00");
    this.createSeries(chart, xAxis, yAxis, "Switch", data, "logs", "#0000cc");
    this.createSeries(chart, xAxis, yAxis, "Application", data, "logs", "#cccc00");
    this.createSeries(chart, xAxis, yAxis, "Code Versioning System", data, "logs", "#cc00cc");

    // Add legend
    let legend = chart.children.push(am5.Legend.new(this.root, {}));
    legend.data.setAll(chart.series.values);

    // Add cursor
    chart.set("cursor", am5xy.XYCursor.new(this.root, {
      behavior: "zoomXY"
    }));
  }

  // Function to create a series
  createSeries(chart: any, xAxis: any, yAxis: any, name: string, data: any[], valueField: string, color: string) {
    let series = chart.series.push(am5xy.LineSeries.new(this.root, {
      name: name,
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: valueField,
      categoryXField: "source",
      stroke: am5.color(color),
      tooltip: am5.Tooltip.new(this.root, {
        labelText: "{valueY}"
      })
    }));

    series.data.setAll(data);
    series.appear(1000);
  }

  ngOnDestroy(): void {
    // Dispose of chart resources
    if (this.root) {
      this.root.dispose();
    }
  }
}