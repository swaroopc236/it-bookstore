import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private BOOKS_URL = 'https://api.itbook.store/1.0';
  private itemsInCart = [];

  constructor(private http: HttpClient, private store: Store<{ cart: any }>) {
    this.store.select('cart').subscribe((data: any) => {
      this.itemsInCart = data.cart;
    });
  }

  getNewBooks() {
    const newBooksUrl = `${this.BOOKS_URL}/new`;
    return this.http.get(newBooksUrl);
  }

  searchBooks(query: string, page: number = 1) {
    const searchBooksUrl = `${this.BOOKS_URL}/search/${query}/${page}`;
    console.log('Requesting:: ', searchBooksUrl);
    return this.http.get(searchBooksUrl);
  }

  isBookPresentInCart(book: any) {
    const bookInCart = this.itemsInCart.filter(
      (item: any) => item.book.isbn13 === book.isbn13
    );
    if (bookInCart.length > 0) {
      return true;
    }
    return false;
  }
}
