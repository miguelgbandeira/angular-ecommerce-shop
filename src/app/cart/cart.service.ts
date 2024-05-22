import { Injectable } from '@angular/core';
import { Product } from '../shared/models/product.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartList: Product[] = [];
  totalPrice = 0;
  cartListChanged = new Subject<Product[]>();
  totalPriceChanged = new Subject<number>();

  constructor() {}

  addToCart(item: Product, quantityToAdd: number = 1) {
    const existingItem = this.cartList.find(
      (cartItem) => cartItem.id === item.id,
    );

    if (existingItem) {
      this.cartList = this.cartList.map((cartItem: Product) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + quantityToAdd }
          : cartItem,
      );
    } else {
      this.cartList = [...this.cartList, { ...item, quantity: quantityToAdd }];
    }
    this.calculateTotalValue();
    this.cartListChanged.next(this.cartList);
  }

  removeItemFromCart(item: Product) {
    this.cartList = this.cartList.filter((cartItem) => cartItem !== item);
    this.calculateTotalValue();
    this.cartListChanged.next(this.cartList);
  }

  calculateTotalValue() {
    this.totalPrice = this.cartList.reduce(
      (total, product) => total + product.price * product.quantity,
      0,
    );
    this.totalPriceChanged.next(this.totalPrice);
  }

  resetCartList() {
    this.cartList = [];
    this.totalPrice = 0;
    this.cartListChanged.next(this.cartList);
    this.totalPriceChanged.next(this.totalPrice);
  }
}
