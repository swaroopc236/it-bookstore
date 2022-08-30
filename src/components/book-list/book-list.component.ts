import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { NavigationService } from 'src/services/navigation.service';
import {
  SET_SEARCH_LOADING,
  SEARCH_BOOKS_LOADING,
  SET_SEARCH_QUERY,
} from 'src/store/actions/book.actions';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit, OnDestroy {
  books: any;
  isLoading = true;
  totalBooks = 10;
  numOfPages = 1;
  currentPage = 1;
  query = '';

  store$: any;
  route$: any;

  constructor(
    private store: Store<{ searchBooks: any }>,
    private route: ActivatedRoute,
    private router: Router,
    private navService: NavigationService
  ) {
    this.route$ = this.route.params.subscribe((params: any) => {
      console.log(params);
      this.query = params.query;
      const pageToNav = parseInt(params.page);
      this.store.dispatch(SET_SEARCH_LOADING({ isLoading: true }));
      this.store.dispatch(SET_SEARCH_QUERY({ query: this.query }));
      this.store.dispatch(SEARCH_BOOKS_LOADING({ page: pageToNav }));

      this.store$ = this.store.select('searchBooks').subscribe((data: any) => {
        console.log(data);
        this.books = data.searchBooks;
        this.isLoading = data.isLoading;
        this.totalBooks = parseInt(data.total);
        this.numOfPages = Math.ceil(this.totalBooks / 10);
        this.currentPage = parseInt(data.page);
      });
    });
  }

  ngOnInit(): void {}

  onPageClick(pageClick: number) {
    this.navService.navigateToSearch(this.query, pageClick);
  }

  isValid(cp: number) {
    if (cp <= 1 || cp >= this.numOfPages) {
      return false;
    }
    return true;
  }

  showEllipses(cp: number) {
    if (cp < this.numOfPages && cp > 1) {
      return true;
    }
    return false;
  }

  ngOnDestroy() {
    this.store$.unsubscribe();
    this.route$.unsubscribe();
  }
}
