import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LOAD_NEW_BOOKS_LOADING } from 'src/store/actions/newBooks.actions';

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.css'],
})
export class NewReleasesComponent implements OnInit {
  newBooks$: Observable<any>;
  cart$: Observable<any>;

  newBooks: any[] = [];
  isBooksLoading = true;

  constructor(private store: Store<{ newBooks: any; cart: any }>) {
    this.newBooks$ = this.store.select('newBooks');
    this.cart$ = this.store.select('cart');
    this.newBooks$.subscribe((data: any) => {
      console.log('New books are:', data.books);
      this.newBooks = data.books;
      this.isBooksLoading = data.isLoading;
    });
    this.cart$.subscribe((data: any) => {
      console.log('Cart is:', data.cart);
    });
  }

  ngOnInit() {
    this.store.dispatch(LOAD_NEW_BOOKS_LOADING());
    // this.store.dispatch(LOAD_CART());
  }
}
