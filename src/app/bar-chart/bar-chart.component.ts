import { Component, OnInit } from '@angular/core';
import { SalesDataService } from '../sales-data.service';
import * as moment from 'moment';

// const SAMPLE_BARCHART_DATA: any[] =[
//   {data: [65, 29, 56, 23, 86, 27], label:'Q3 Sales'},
//   {data: [23, 67, 36, 67, 78, 34], label:'Q4 Sales'}
// ];

// const SAMPLE_BARCHART_LABELS: string[]= ['w1', 'w2', 'w3', 'w4', 'w5', 'w6', 'w7'];

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  constructor(private salesDataService : SalesDataService) { }

  orders: any;
  orderLabels: string[];
  orderData: number[];

  public barChartData: any[];     // = SAMPLE_BARCHART_DATA;
  public barChartLabels: string[];    // = SAMPLE_BARCHART_LABELS;
  public barChartType = 'bar';
  public barChartLegend=true;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive:true
  }

  ngOnInit() {
    this.salesDataService.getOrders(1, 100)
      .subscribe(res => {
        // console.log(res['page']['data']);
        
        var localChartData = this.getChartData(res);
        this.barChartLabels = localChartData.map(x => x[0]).reverse();
        this.barChartData = [{ 'data': localChartData.map(x => x[1]), 'label': 'Sales'}];
      });
  }


  getChartData(res: any) {
    this.orders = res['page']['data'];
    const data = this.orders.map(o => o.total);

    const formattedOrders = this.orders.reduce((r, e) => {
      r.push([moment(e.placed).format('YY-MM-DD'), e.total]);
      return r;
    }, []);

    const p = [];

    const chartData = formattedOrders.reduce((r, e) => {
      const key = e[0];
      if (!p[key]) {
        p[key] = e;
        r.push(p[key]);
      } else {
        p[key][1] += e[1];
      }
      return r;
    }, []);

    return chartData;

    // const myData = [3, 4, 5].reduce((sum, value) => {
    //   console.log('sum:', sum, 'value:', value);
    //   return sum + value;
    // }, 0);
    // console.log('myData:', myData);

    // console.log(labels);
  }
}
