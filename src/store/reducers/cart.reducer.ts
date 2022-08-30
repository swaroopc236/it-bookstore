import { createReducer, on } from '@ngrx/store';
import {
  ADD_TO_CART,
  CLEAR_CART,
  LOAD_CART,
  REMOVE_FROM_CART,
  UPDATE_ITEM_QUANTITY_IN_CART,
} from '../actions/cart.actions';
import { cartInitialState } from '../state/cart.state';

export const cartReducer = createReducer(
  cartInitialState,
  on(LOAD_CART, (state: any) => {
    console.log(LOAD_CART.type, state);
    return state;
  }),
  on(ADD_TO_CART, (state: any, { book }) => {
    console.log(ADD_TO_CART.type, state, book);
    const bookPrice = parseFloat(book.price.substring(1));
    const newCartItem = {
      book: book,
      itemPrice: bookPrice,
      quantity: 1,
      itemTotal: bookPrice,
    };
    return {
      ...state,
      cart: state.cart.concat(newCartItem),
      cartTotal: state.cartTotal + newCartItem.itemPrice,
    };
  }),
  on(REMOVE_FROM_CART, (state: any, { book }) => {
    console.log(REMOVE_FROM_CART.type, state, book);
    const newCart = state.cart.filter(
      (item: any) => item.book.isbn13 !== book.isbn13
    );
    let cartTotal = 0.0;
    newCart.map((item: any) => (cartTotal += item.itemTotal));
    return {
      ...state,
      cart: newCart,
      cartTotal: cartTotal,
    };
  }),
  on(UPDATE_ITEM_QUANTITY_IN_CART, (state: any, { book, quantity }) => {
    console.log(UPDATE_ITEM_QUANTITY_IN_CART.type, state, book, quantity);
    const bookPrice = parseFloat(book.price.substring(1));
    let cartTotal = 0.0;
    const newCart = state.cart.map((item: any) => {
      if (item.book.isbn13 === book.isbn13) {
        cartTotal += quantity * bookPrice;
        return {
          book: book,
          itemPrice: bookPrice,
          quantity: quantity,
          itemTotal: quantity * bookPrice,
        };
      }
      cartTotal += item.itemTotal;
      return item;
    });
    return {
      ...state,
      cart: newCart,
      cartTotal: cartTotal,
    };
  }),
  on(CLEAR_CART, (state: any) => {
    console.log(CLEAR_CART.type, state);
    return {
      ...state,
      cart: [],
      cartTotal: 0,
    };
  })
);
