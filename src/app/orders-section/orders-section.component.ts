import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/order';
import { SalesDataService } from "../sales-data.service";

@Component({
  selector: 'app-orders-section',
  templateUrl: './orders-section.component.html',
  styleUrls: ['./orders-section.component.scss']
})
export class OrdersSectionComponent implements OnInit {

  constructor(private salesData: SalesDataService) { }

  // orders: Order[] = [
  //   {id:1, customer:{id:1, name:'Main st bakery', state:'MA', email:'abc@xyz.com'},total:230,placed:new Date(2019,12,3), fulfilled:new Date(2019,12,5)},
  //   {id:2, customer:{id:2, name:'Main st bakery', state:'MA', email:'abc@xyz.com'},total:230,placed:new Date(2019,12,3), fulfilled:new Date(2019,12,5)},
  //   {id:3, customer:{id:3, name:'Main st bakery', state:'MA', email:'abc@xyz.com'},total:230,placed:new Date(2019,12,3), fulfilled:new Date(2019,12,5)},
  //   {id:4, customer:{id:3, name:'Main st bakery', state:'MA', email:'abc@xyz.com'},total:230,placed:new Date(2019,12,3), fulfilled:new Date(2019,12,5)},
  //   {id:5, customer:{id:3, name:'Main st bakery', state:'MA', email:'abc@xyz.com'},total:230,placed:new Date(2019,12,3), fulfilled:new Date(2019,12,5)},
  //   {id:6, customer:{id:3, name:'Main st bakery', state:'MA', email:'abc@xyz.com'},total:230,placed:new Date(2019,12,3), fulfilled:new Date(2019,12,5)}
  // ]

  orders: Order[];
  total = 0;
  page = 1;
  limit = 10;
  loading = false;

  ngOnInit() {
    this.getOrders();
  }

  getOrders(): void {
    this.salesData.getOrders(this.page, this.limit)
      .subscribe(res => {
       // console.log('Result from getOrders: ', res);
        this.orders = res['page']['data'];
        this.total = res['page'].total;
        this.loading = false;
      });
  }

  goToPrevious():void{
    //console.log("previous button clicked");
    this.page--;
    this.getOrders();
  }

  goToNext():void{
    //console.log("next button clicked");
    this.page++;
    this.getOrders();
  }

  goToPage(n: number): void {
    this.page = n;
    this.getOrders();
  }

}
