import { createReducer, on } from '@ngrx/store';
import {
  LOAD_NEW_BOOKS,
  LOAD_NEW_BOOKS_ERROR,
  LOAD_NEW_BOOKS_SUCCESS,
} from '../actions/newBooks.actions';
import { newBooksInitialState } from '../state/newBooks.state';

export const newBooksReducer = createReducer(
  newBooksInitialState,
  on(LOAD_NEW_BOOKS, (state: any) => {
    console.log(LOAD_NEW_BOOKS.type, state);
    return state;
  }),
  on(LOAD_NEW_BOOKS_SUCCESS, (state: any, { books }) => {
    console.log(LOAD_NEW_BOOKS_SUCCESS.type, state);
    return {
      ...state,
      isLoading: false,
      books: books,
    };
  }),
  on(LOAD_NEW_BOOKS_ERROR, (state: any) => {
    console.log(LOAD_NEW_BOOKS_ERROR.type, state);
    return {
      ...state,
      isLoading: false,
    };
  })
);
