import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, tap, mergeMap, of } from 'rxjs';
import { BookService } from 'src/services/book.service';
import {
  SEARCH_BOOKS_ERROR,
  SEARCH_BOOKS_SUCCESS,
} from '../actions/book.actions';

@Injectable()
export class SearchBooksEffect {
  constructor(
    private actions$: Actions,
    private bookService: BookService,
    private store: Store<{ searchBooks: any }>
  ) {}

  searchBooks$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType('[SEARCH BOOKS] SEARCH_BOOKS_LOADING'),
        concatLatestFrom((action: any) => this.store.select('searchBooks')),
        tap((res) => console.log(res)),
        mergeMap((result: any) =>
          this.bookService.searchBooks(result[1].query, result[0].page).pipe(
            map((data: any) =>
              this.store.dispatch(
                SEARCH_BOOKS_SUCCESS({
                  books: data.books,
                  error: data.error,
                  total: data.total,
                  page: data.page,
                })
              )
            ),
            catchError((err) => of(this.store.dispatch(SEARCH_BOOKS_ERROR())))
          )
        )
      ),
    { dispatch: false }
  );
}
