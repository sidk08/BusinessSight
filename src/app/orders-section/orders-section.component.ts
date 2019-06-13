import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/order';
@Component({
  selector: 'app-orders-section',
  templateUrl: './orders-section.component.html',
  styleUrls: ['./orders-section.component.scss']
})
export class OrdersSectionComponent implements OnInit {

  constructor() { }

  orders: Order[] = [
    {id:1, customer:{id:1, name:'Main st bakery', state:'MA', email:'abc@xyz.com'},total:230,placed:new Date(2019,12,3), fulfilled:new Date(2019,12,5)},
    {id:2, customer:{id:2, name:'Main st bakery', state:'MA', email:'abc@xyz.com'},total:230,placed:new Date(2019,12,3), fulfilled:new Date(2019,12,5)},
    {id:3, customer:{id:3, name:'Main st bakery', state:'MA', email:'abc@xyz.com'},total:230,placed:new Date(2019,12,3), fulfilled:new Date(2019,12,5)},
    {id:4, customer:{id:3, name:'Main st bakery', state:'MA', email:'abc@xyz.com'},total:230,placed:new Date(2019,12,3), fulfilled:new Date(2019,12,5)},
    {id:5, customer:{id:3, name:'Main st bakery', state:'MA', email:'abc@xyz.com'},total:230,placed:new Date(2019,12,3), fulfilled:new Date(2019,12,5)},
    {id:6, customer:{id:3, name:'Main st bakery', state:'MA', email:'abc@xyz.com'},total:230,placed:new Date(2019,12,3), fulfilled:new Date(2019,12,5)}
  ]

  ngOnInit() {
  }

}
