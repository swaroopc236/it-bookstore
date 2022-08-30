import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CLEAR_CART } from 'src/store/actions/cart.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnDestroy {
  cartItems = [];
  cartTotal = 0;
  cart$: any;

  constructor(private store: Store<{ cart: any }>) {
    this.cart$ = this.store.select('cart').subscribe((data: any) => {
      this.cartItems = data.cart;
      this.cartTotal = data.cartTotal;
    });
  }

  ngOnInit(): void {}

  onClearCart() {
    this.store.dispatch(CLEAR_CART());
  }

  ngOnDestroy(): void {
    this.cart$.unsubscribe();
  }
}
