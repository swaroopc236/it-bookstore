import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from 'src/components/book-detail/book-detail.component';
import { BookListComponent } from 'src/components/book-list/book-list.component';
import { HomeComponent } from 'src/components/home/home.component';
import { NewReleasesComponent } from 'src/components/new-releases/new-releases.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'search/:query/:page', component: BookListComponent },
  { path: 'books/:isbn13', component: BookDetailComponent },
  {
    path: 'cart',
    loadChildren: () => import('../cart/cart.module').then((m) => m.CartModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
