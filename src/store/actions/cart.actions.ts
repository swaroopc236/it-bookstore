import { createAction, props } from '@ngrx/store';

export const LOAD_CART = createAction('[CART] LOAD_CART');

export const ADD_TO_CART = createAction('[CART] ADD_TO_CART', props<any>());

export const REMOVE_FROM_CART = createAction(
  '[CART] REMOVE_FROM__CART',
  props<any>()
);

export const UPDATE_ITEM_QUANTITY_IN_CART = createAction(
  '[CART] UPDATE_ITEM_QUANTITY_IN_CART',
  props<any>()
);

export const CLEAR_CART = createAction('[CART] CLEAR_CART');
