import { createReducer, on } from '@ngrx/store';
import { LOAD_CART } from '../actions/cart.actions';
import { cartInitialState } from '../state/cart.state';

export const cartReducer = createReducer(
  cartInitialState,
  on(LOAD_CART, (state: any) => {
    console.log(LOAD_CART.type, state);
    return state;
  })
);
