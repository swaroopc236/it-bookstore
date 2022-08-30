import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  REMOVE_FROM_CART,
  UPDATE_ITEM_QUANTITY_IN_CART,
} from 'src/store/actions/cart.actions';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit, OnDestroy {
  @Input() item: any;
  itemQuantity: number = 0;
  itemTotal: number = 0;
  cart$: any;

  constructor(private store: Store<{ cart: any }>) {}

  ngOnInit(): void {
    this.cart$ = this.store.select('cart').subscribe((data: any) => {
      console.log(data);
      const currentItem = data.cart.filter(
        (cartItem: any) => cartItem.book.isbn13 === this.item.book.isbn13
      )[0];
      this.itemTotal = currentItem !== undefined ? currentItem.itemTotal : 0;
      this.itemQuantity = currentItem !== undefined ? currentItem.quantity : 0;
    });
    // this.itemQuantity = this.item.quantity;
    // this.itemTotal = this.item.itemTotal;
  }

  updateItemQuantity(delta: number) {
    // this.itemQuantity += delta;
    this.store.dispatch(
      UPDATE_ITEM_QUANTITY_IN_CART({
        book: this.item.book,
        quantity: (this.itemQuantity += delta),
      })
    );
  }

  disableUpdateButton() {
    if (this.itemQuantity <= 1 || this.itemQuantity >= 100) {
      return true;
    }
    return false;
  }

  deleteItemFromCart() {
    this.store.dispatch(REMOVE_FROM_CART({ book: this.item.book }));
  }

  ngOnDestroy(): void {
    this.cart$.unsubscribe();
  }
}
