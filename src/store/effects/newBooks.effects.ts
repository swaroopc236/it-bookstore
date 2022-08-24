import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, tap, mergeMap, of } from 'rxjs';
import { BookService } from 'src/services/book.service';
import {
  LOAD_NEW_BOOKS_ERROR,
  LOAD_NEW_BOOKS_SUCCESS,
} from '../actions/newBooks.actions';

@Injectable()
export class NewBooksEffect {
  constructor(
    private actions$: Actions,
    private bookService: BookService,
    private store: Store
  ) {}

  loadNewBooks$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType('[NEW_BOOKS] LOAD_NEW_BOOKS_LOADING'),
        mergeMap((action: any) =>
          this.bookService.getNewBooks().pipe(
            map((data: any) =>
              this.store.dispatch(LOAD_NEW_BOOKS_SUCCESS({ books: data.books }))
            ),
            catchError((err) => of(this.store.dispatch(LOAD_NEW_BOOKS_ERROR())))
          )
        )
      ),
    { dispatch: false }
  );
}
