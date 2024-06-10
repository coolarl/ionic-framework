import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items$ = new BehaviorSubject<CartItem[]>([
    {
      id: 4,
      name: 'Converse',
      price: 589.0,
      image: '.../../../assets/images/cnverse-removebg-preview.png',
      quantity: 1,
    },
  ]);

  getCart() {
    return this.items$.asObservable();
  }

  addToCart(newItem: CartItem) {
    this.items$.next([...this.items$.getValue(), newItem]);
  }

  removeItem(id: number) {
    this.items$.next(this.items$.getValue().filter((item) => item.id !== id));
  }

  changeQty(quantity: number, id: number) {
    const items = this.items$.getValue();
    const index = items.findIndex((item) => item.id === id);
    items[index].quantity += quantity;
    this.items$.next(items);
  }

  getTotalAmount() {
    return this.items$.pipe(
      map((items) => {
        let total = 0;
        items.forEach((item) => {
          total += item.quantity * item.price;
        });
        return total;
      })
    );
  }
}
