import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { BookService } from 'src/services/book.service';
import { ADD_TO_CART, REMOVE_FROM_CART } from 'src/store/actions/cart.actions';

@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.css'],
})
export class BookPreviewComponent implements OnInit, OnDestroy {
  @Input() book: any;
  isBookAlreadyPresentInCart: boolean = false;
  tid: any;

  constructor(
    private store: Store,
    private bookService: BookService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.isBookAlreadyPresentInCart = this.bookService.isBookPresentInCart(
      this.book
    );
  }

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
    clearInterval(this.tid);
  }
}
