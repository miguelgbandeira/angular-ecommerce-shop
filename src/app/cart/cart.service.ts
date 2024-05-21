import { Injectable } from '@angular/core';
import { Product } from '../shared/models/product.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartList: Product[] = [];
  cartListChanged = new Subject<Product[]>();

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
    this.cartListChanged.next(this.cartList);
  }
}
