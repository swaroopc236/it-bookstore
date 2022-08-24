import { createAction, props } from '@ngrx/store';

export const SEARCH_BOOKS_LOADING = createAction(
  '[SEARCH BOOKS] SEARCH_BOOKS_LOADING',
  props<any>()
);
export const SEARCH_BOOKS_SUCCESS = createAction(
  '[SEARCH_BOOKS] SEARCH_BOOKS_SUCCESS',
  props<any>()
);
export const SEARCH_BOOKS_ERROR = createAction(
  '[SEARCH_BOOKS] SEARCH_BOOKS_ERROR'
);

export const SET_SEARCH_QUERY = createAction(
  '[SEARCH_BOOKS] SET_SEARCH_QUERY',
  props<any>()
);
export const SET_SEARCH_TOTAL = createAction(
  '[SEARCH_BOOKS] SET_SEARCH_TOTAL',
  props<any>()
);
export const SET_SEARCH_PAGE = createAction(
  '[SEARCH_BOOKS] SET_SEARCH_PAGE',
  props<any>()
);
export const SET_SEARCH_LOADING = createAction(
  '[SEARCH_BOOKS] SET_SEARCH_LOADING',
  props<any>()
);
