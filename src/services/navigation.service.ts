import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private query = '';
  private page = 1;
  constructor(
    private router: Router,
    private store: Store<{ searchBooks: any }>
  ) {}

  navigateToSearch(query: string, page: number) {
    // this.store.select('searchBooks').subscribe((data: any) => {
    //   // console.log(data);
    //   this.query = data.query;
    //   this.page = data.page;
    // });
    this.router.navigateByUrl(`/search/${query}/${page}`);
  }
}
