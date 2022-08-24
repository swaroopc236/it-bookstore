import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BookService } from 'src/services/book.service';
import {
  SET_SEARCH_LOADING,
  SET_SEARCH_QUERY,
  SEARCH_BOOKS_LOADING,
} from 'src/store/actions/book.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private bookService: BookService,
    private store: Store,
    private router: Router
  ) {}

  handleClick(e: any) {
    const query = e.target.textContent;
    // this.bookService.searchBooks(query).subscribe((data: any) => {
    //   console.log(data);
    // });
    this.store.dispatch(SET_SEARCH_LOADING({ isLoading: true }));
    this.store.dispatch(SET_SEARCH_QUERY({ query: query, page: 1 }));
    this.store.dispatch(SEARCH_BOOKS_LOADING({ page: 1 }));
    this.router.navigateByUrl('/search');
  }

  handleClickForNewReleases(e: any) {
    this.bookService.getNewBooks().subscribe((data: any) => {
      console.log(data);
    });
  }

  ngOnInit(): void {
    document.querySelectorAll('.grid-item-item').forEach((el) => {
      el.addEventListener('click', this.handleClick.bind(this));
    });
    document
      .querySelector('.new-releases-container')
      ?.addEventListener('click', this.handleClickForNewReleases.bind(this));
  }
}
