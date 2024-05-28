import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from '../shared/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  constructor(private productsService: ProductsService) {}

  products = this.productsService.products;
}
