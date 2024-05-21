import { Component } from '@angular/core';

@Component({
  selector: 'app-quantity-input',
  templateUrl: './quantity-input.component.html',
  styleUrl: './quantity-input.component.css',
})
export class QuantityInputComponent {
  min = 1;
  max = 100;
  value = 1;

  handleDecrement() {
    if (this.value > this.min) {
      this.value -= 1;
    }
  }

  onChange(target: any) {
    this.value = +target.value;
  }

  handleIncrement() {
    if (this.value < this.max) {
      this.value += 1;
    }
  }
}
