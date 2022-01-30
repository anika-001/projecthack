import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions,RadialChartOptions } from 'chart.js';
import { MultiDataSet,Color, SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { ChartType } from 'chart.js';
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
  }

  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['China', 'United States', 'India', 'Russian Federation', 'Japan', 'Germany'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [10.06, 5.41, 2.65, 1.71, 1.16, 0.75], label: 'Carbon emissions' }
  ];


  doughnutChartLabels: Label[] = ['Planted a Tree', 'Took Public Transport', 'Used Recyclable products'];
  doughnutChartData: MultiDataSet = [
    [55, 25, 20]
  ];
  doughnutChartType: ChartType = 'doughnut';

  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['Analytics lookup', 'Calculated Carbon footprint', 'Games and Quizes',
    'Planted a tree', 'Logged In Portal', 'Wrote a note entry', 'Logged Activity on Tracker'];

  public radarChartData: ChartDataSets[] = [
    { data: [0, 1, 2, 3, 4, 5, 6], label: 'Activity' }
  ];
  public radarChartType: ChartType = 'radar';
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['Travel'], ['food'], 'Clothes'];
  public pieChartData: SingleDataSet = [30, 50, 20];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  public bubbleChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        ticks: {
          min: 0,
          max: 50,
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 50,
        }
      }]
    }
  };
  public bubbleChartType: ChartType = 'bubble';
  public bubbleChartLegend = true;

  public bubbleChartData: ChartDataSets[] = [
    {
      data: [
        { x: 15, y: 15, r: 15 },
        { x: 25, y: 15, r: 25 },
        { x: 36, y: 12, r: 33 },
        { x: 10, y: 18, r: 18 },
      ],
      label: 'Personal Calculated carbon footprint',
    },
  ];
 
}
