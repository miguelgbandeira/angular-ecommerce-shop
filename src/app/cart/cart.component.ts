import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/product.model';
import { CartService } from './cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  cartList: Product[] = [];
  subscription: Subscription = new Subscription();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartList = this.cartService.cartList;
    this.subscription = this.cartService.cartListChanged.subscribe((list) => {
      this.cartList = list;
    });
  }
}
