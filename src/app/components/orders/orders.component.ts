import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../shared/order.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private orderService: OrdersService) { }

  products = [
    {
      name: "Chips",
      price: 4
    },
    {
      name: "Hamburgers",
      price: 8
    },
    {
      name: "Chicken",
      price: 9
    },
    {
      name: "Fish",
      price: 6
    },
    {
      name: "Dessert",
      price: 3
    },
    {
      name: "Sauces",
      price: 1
    },
    {
      name: "Coffee",
      price: 2
    },
    {
      name: "Beer",
      price: 2
    },
    {
      name: "Orange Juice",
      price: 2
    }

  ]

  appName: string = 'Fast Food!';
  totalOrder = 0;
  tempOrder = [];

  ngOnInit() {
  }

  onAddProduct(product) {
    console.log(product)
    this.totalOrder = (this.totalOrder + product.price);
    this.tempOrder.push(product.name);
  }

  removeItemTempOrder = (order) => {
    let index = this.tempOrder.indexOf(order);
    if (index > -1) this.tempOrder.splice(index, 1);
  }

  onSubmit() {
    this.orderService.myForm.value.order = this.tempOrder;
    let data = this.orderService.myForm.value;
    data.totalOrder = this.totalOrder;
    // call service 
    this.orderService.createOrder(data);
    this.tempOrder = [];
    this.totalOrder = 0;
    this.orderService.myForm.reset();
  }
}
