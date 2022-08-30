import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookService } from 'src/services/book.service';
import { ADD_TO_CART, REMOVE_FROM_CART } from 'src/store/actions/cart.actions';

@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.css'],
})
export class BookPreviewComponent implements OnInit {
  @Input() book: any;
  isBookAlreadyPresentInCart: boolean = false;

  constructor(private store: Store, private bookService: BookService) {}

  ngOnInit(): void {
    this.isBookAlreadyPresentInCart = this.bookService.isBookPresentInCart(
      this.book
    );
  }

  addBookToCart() {
    this.store.dispatch(ADD_TO_CART({ book: this.book }));
    this.isBookAlreadyPresentInCart = this.bookService.isBookPresentInCart(
      this.book
    );
  }

  removeBookFromCart() {
    this.store.dispatch(REMOVE_FROM_CART({ book: this.book }));
    this.isBookAlreadyPresentInCart = this.bookService.isBookPresentInCart(
      this.book
    );
  }
}
