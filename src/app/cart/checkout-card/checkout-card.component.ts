import { Component, Input } from '@angular/core';
import { Product } from '../../shared/models/product.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout-card',
  templateUrl: './checkout-card.component.html',
  styleUrl: './checkout-card.component.css',
})
export class CheckoutCardComponent {
  @Input() product!: Product;

  constructor(private cartService: CartService) {}

  onRemove() {
    this.cartService.removeItemFromCart(this.product);
  }
}
