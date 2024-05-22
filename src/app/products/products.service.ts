import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../shared/models/product.model';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Product[] | null = null;
  constructor(private http: HttpClient) {}

  fetchProducts() {
    if (this.products) {
      return of(this.products);
    } else {
      return this.http
        .get<Product[]>('https://fakestoreapi.com/products')
        .pipe(tap((products) => (this.products = products)));
    }
  }

  fetchProductFromId(id: string): Observable<Product> {
    return this.http.get<Product>(`https://fakestoreapi.com/products/${id}`);
  }
}
