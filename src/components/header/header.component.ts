import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  SEARCH_BOOKS_LOADING,
  SET_SEARCH_LOADING,
  SET_SEARCH_QUERY,
} from 'src/store/actions/book.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('searchInput') searchInput!: ElementRef;
  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {}

  onSearch() {
    const query = this.searchInput.nativeElement.value;
    console.log(query);
    this.store.dispatch(SET_SEARCH_LOADING({ isLoading: true }));
    this.store.dispatch(SET_SEARCH_QUERY({ query: query, page: 1 }));
    this.store.dispatch(SEARCH_BOOKS_LOADING({ page: 1 }));
    this.router.navigateByUrl('/search');
  }
}
