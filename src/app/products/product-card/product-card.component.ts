import { Component, Input, ViewChild } from '@angular/core';
import { Product } from '../../shared/models/product.model';
import { QuantityInputComponent } from './quantity-input/quantity-input.component';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product!: Product;
  @ViewChild(QuantityInputComponent) quantityInput!: QuantityInputComponent;

  constructor(private cartService: CartService) {}

  onAddToCart() {
    this.cartService.addToCart(this.product, this.quantityInput.value);
    console.log(this.cartService.cartList);
  }
}
