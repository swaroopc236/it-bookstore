import { createAction, props } from '@ngrx/store';

export const LOAD_NEW_BOOKS = createAction('[NEW_BOOKS] LOAD_NEW_BOOKS');
export const LOAD_NEW_BOOKS_LOADING = createAction(
  '[NEW_BOOKS] LOAD_NEW_BOOKS_LOADING'
);
export const LOAD_NEW_BOOKS_SUCCESS = createAction(
  '[NEW_BOOKS] LOAD_NEW_BOOKS_SUCCESS',
  props<any>()
);
export const LOAD_NEW_BOOKS_ERROR = createAction(
  '[NEW_BOOKS] LOAD_NEW_BOOKS_ERROR'
);
