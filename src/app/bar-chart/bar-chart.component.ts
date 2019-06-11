import { Component, OnInit } from '@angular/core';

const SAMPLE_BARCHART_DATA: any[] =[
  {data: [65, 29, 56, 23, 86, 27], label:'Q3 Sales'},
  {data: [23, 67, 36, 67, 78, 34], label:'Q4 Sales'}
];

const SAMPLE_BARCHART_LABELS: string[]= ['w1', 'w2', 'w3', 'w4', 'w5', 'w6', 'w7'];

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  public barChartData: any[] = SAMPLE_BARCHART_DATA;
  public barChartLabels: string[] = SAMPLE_BARCHART_LABELS;
  public barChartType = 'bar';
  public barChartLegend=true;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive:true
  }

  ngOnInit() {
  }

}
