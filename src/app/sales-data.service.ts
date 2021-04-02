import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class SalesDataService {

  constructor(private http: HttpClient) { }

  getOrders(pageIndex: number, pageSize: number) {
    return this.http.get('https://localhost:5001/api/order/' + pageIndex + '/' + pageSize);
  }

  getOrdersByCustomer(n: number) {
    return this.http.get('https://localhost:5001/api/order/bycustomer/' + n);
  }

  getOrdersByState() {
    return this.http.get('https://localhost:5001/api/order/bystate/');
  }
}
