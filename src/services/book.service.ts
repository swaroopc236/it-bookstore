import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private BOOKS_URL = 'https://api.itbook.store/1.0';

  constructor(private http: HttpClient) {}

  getNewBooks() {
    const newBooksUrl = `${this.BOOKS_URL}/new`;
    return this.http.get(newBooksUrl);
  }

  searchBooks(query: string, page: number = 1) {
    const searchBooksUrl = `${this.BOOKS_URL}/search/${query}/${page}`;
    console.log('Requesting:: ', searchBooksUrl);
    return this.http.get(searchBooksUrl);
  }
}
