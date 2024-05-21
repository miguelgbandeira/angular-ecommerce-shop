import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Product[] = [];
  constructor(private http: HttpClient) {}
}
