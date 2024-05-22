import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../shared/models/product.model';
import { CartService } from './cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit, OnDestroy {
  cartList: Product[] = [];
  subscriptions: Subscription[] = [];
  totalPrice = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartList = this.cartService.cartList;
    this.totalPrice = this.cartService.totalPrice;
    this.subscriptions.push(
      this.cartService.cartListChanged.subscribe((list) => {
        this.cartList = list;
      }),
    );
    this.subscriptions.push(
      this.cartService.totalPriceChanged.subscribe((value) => {
        this.totalPrice = value;
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
