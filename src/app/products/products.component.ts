import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from '../shared/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.fetchProducts().subscribe(
      (products) => {
        this.products = products;
      },
      (error) => {
        console.error(error);
      },
    );
  }
}
