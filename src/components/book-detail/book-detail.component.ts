import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BookService } from 'src/services/book.service';
import { NavigationService } from 'src/services/navigation.service';
import { ADD_TO_CART, REMOVE_FROM_CART } from 'src/store/actions/cart.actions';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit, OnDestroy {
  book: any = undefined;
  isbn13: string = '';
  book$: any;
  route$: any;
  isLoading: boolean = true;
  dataSource: any;
  displayedColumns: string[] = ['key', 'value'];
  tid: any;
  isBookAlreadyPresentInCart: boolean = false;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private store: Store,
    private snackBar: MatSnackBar
  ) {
    this.route$ = this.route.params.subscribe((params: any) => {
      this.isbn13 = params.isbn13;
      this.book$ = this.bookService
        .getBookByISBN13(this.isbn13)
        .subscribe((data: any) => {
          console.log(data);
          if (data.error === '0') {
            this.book = data;
            this.isBookAlreadyPresentInCart =
              this.bookService.isBookPresentInCart(this.book);
            this.dataSource = [
              { key: 'Authors', value: this.book.authors },
              { key: 'Language', value: this.book.language },
              { key: 'Pages', value: this.book.pages },
              { key: 'Publisher', value: this.book.authors },
              { key: 'ISBN 10', value: this.book.isbn10 },
              { key: 'ISBN 13', value: this.book.isbn13 },
              { key: 'Year', value: this.book.year },
            ];
          }
          this.isLoading = false;
        });
    });
  }

  ngOnInit(): void {}

  addBookToCart(event: any) {
    event.stopPropagation();
    this.store.dispatch(ADD_TO_CART({ book: this.book }));
    this.isBookAlreadyPresentInCart = this.bookService.isBookPresentInCart(
      this.book
    );
    this.snackBar.open('Book added to the cart');
    this.tid = setTimeout(() => {
      this.snackBar.dismiss();
    }, 2000);
  }

  removeBookFromCart(event: any) {
    event.stopPropagation();
    this.store.dispatch(REMOVE_FROM_CART({ book: this.book }));
    this.isBookAlreadyPresentInCart = this.bookService.isBookPresentInCart(
      this.book
    );
    this.snackBar.open('Book removed from the cart');
    this.tid = setTimeout(() => {
      this.snackBar.dismiss();
    }, 2000);
  }

  ngOnDestroy(): void {
    this.route$.unsubscribe();
    this.book$.unsubscribe();
    clearInterval(this.tid);
  }
}
