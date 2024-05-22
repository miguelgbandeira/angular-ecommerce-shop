import { Component, OnInit, ViewChild } from '@angular/core';
import { CartService } from '../../cart/cart.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../../shared/models/product.model';
import { ProductsService } from '../products.service';
import { Subscription } from 'rxjs';
import { QuantityInputComponent } from '../product-card/quantity-input/quantity-input.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  id!: string;
  product!: Product;
  subscriptions: Subscription[] = [];
  @ViewChild(QuantityInputComponent) quantityInput!: QuantityInputComponent;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
    private activeRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.activeRoute.params.subscribe((params: Params) => {
        this.id = params['id'];
      }),
    );
    this.subscriptions.push(
      this.productsService.fetchProductFromId(this.id).subscribe((prod) => {
        this.product = prod;
      }),
    );
  }

  onAddToCart() {
    this.cartService.addToCart(this.product, this.quantityInput.value);
  }
}
