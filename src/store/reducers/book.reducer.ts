import { createReducer, on } from '@ngrx/store';
import {
  SEARCH_BOOKS_ERROR,
  SEARCH_BOOKS_LOADING,
  SEARCH_BOOKS_SUCCESS,
  SET_SEARCH_LOADING,
  SET_SEARCH_PAGE,
  SET_SEARCH_QUERY,
  SET_SEARCH_TOTAL,
} from '../actions/book.actions';
import { booksInitialState } from '../state/book.state';

export const searchBooksReducer = createReducer(
  booksInitialState,
  on(SEARCH_BOOKS_SUCCESS, (state: any, { books, error, total, page }) => {
    console.log(SEARCH_BOOKS_SUCCESS.type, books, error, total, page);
    return {
      ...state,
      isLoading: false,
      searchBooks: books,
      error: error,
      total: total,
      page: page,
    };
  }),
  on(SEARCH_BOOKS_ERROR, (state: any) => {
    console.log(SEARCH_BOOKS_ERROR.type);
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(SET_SEARCH_QUERY, (state: any, { query, page }) => {
    console.log(SET_SEARCH_QUERY.type, query);
    return {
      ...state,
      query: query,
      page: page,
    };
  }),
  on(SET_SEARCH_PAGE, (state: any, { page }) => {
    console.log(SET_SEARCH_PAGE.type, page);
    return {
      ...state,
      page: parseInt(page),
    };
  }),
  on(SET_SEARCH_TOTAL, (state: any, { total }) => {
    console.log(SET_SEARCH_TOTAL.type, total);
    return {
      ...state,
      total: parseInt(total),
    };
  }),
  on(SET_SEARCH_LOADING, (state: any, { isLoading }) => {
    console.log(SET_SEARCH_LOADING.type, isLoading);
    return {
      ...state,
      isLoading: isLoading,
    };
  })
);
