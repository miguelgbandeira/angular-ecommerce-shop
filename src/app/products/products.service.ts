import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../shared/models/product.model';
import { Observable, catchError, of, shareReplay, tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  private products$ = this.http
    .get<Product[]>('https://fakestoreapi.com/products')
    .pipe(
      shareReplay(1),
      catchError((err) => {
        console.log(err);
        return of([]);
      }),
    );

  products = toSignal(this.products$, { initialValue: [] as Product[] });

  fetchProductFromId(id: string): Observable<Product> {
    return this.http.get<Product>(`https://fakestoreapi.com/products/${id}`);
  }
}
