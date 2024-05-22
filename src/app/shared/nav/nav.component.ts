import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent implements OnInit {
  counter = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartListChanged.subscribe((list) => {
      this.counter = list.length;
    });
  }
}
