import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  SET_SEARCH_LOADING,
  SEARCH_BOOKS_LOADING,
} from 'src/store/actions/book.actions';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit, AfterViewInit {
  // @Input() books: any;
  books: any;
  isLoading = true;
  totalBooks = 10;
  numOfPages = 1;
  currentPage = 1;

  constructor(private store: Store<{ searchBooks: any }>) {
    this.store.select('searchBooks').subscribe((data: any) => {
      console.log(data);
      this.books = data.searchBooks;
      this.isLoading = data.isLoading;
      this.totalBooks = parseInt(data.total);
      this.numOfPages = Math.ceil(this.totalBooks / 10);
      this.currentPage = parseInt(data.page);
    });
  }

  ngOnInit(): void {
    // document.querySelectorAll('.btn-page').forEach((el) => {
    //   el.addEventListener('click', this.onPageClick.bind(this));
    // });
  }

  ngAfterViewInit(): void {
    // document.querySelectorAll('.btn-page').forEach((el) => {
    //   el.addEventListener('click', this.onPageClick.bind(this));
    // });
  }

  onPageClick(pageClick: number) {
    this.store.dispatch(SET_SEARCH_LOADING({ isLoading: true }));
    this.store.dispatch(SEARCH_BOOKS_LOADING({ page: pageClick }));
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
}
