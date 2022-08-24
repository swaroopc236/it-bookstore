import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from 'src/store/reducers/cart.reducer';
import { newBooksReducer } from 'src/store/reducers/newBooks.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { NewBooksEffect } from 'src/store/effects/newBooks.effects';
import { BookPreviewComponent } from '../components/book-preview/book-preview.component';
import { NewReleasesComponent } from '../components/new-releases/new-releases.component';
import { HeaderComponent } from '../components/header/header.component';
import { BookListComponent } from '../components/book-list/book-list.component';
import { HomeComponent } from '../components/home/home.component';
import { searchBooksReducer } from 'src/store/reducers/book.reducer';
import { SearchBooksEffect } from 'src/store/effects/book.effects';

@NgModule({
  declarations: [
    AppComponent,
    BookPreviewComponent,
    NewReleasesComponent,
    HeaderComponent,
    BookListComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      newBooks: newBooksReducer,
      searchBooks: searchBooksReducer,
      cart: cartReducer,
    }),
    EffectsModule.forRoot([NewBooksEffect, SearchBooksEffect]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
