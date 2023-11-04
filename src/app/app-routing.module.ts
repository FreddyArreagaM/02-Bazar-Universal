import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResultSearchComponent } from './components/result-search/result-search.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'items', component: ResultSearchComponent
  },
  {
    path: 'items/:id', component: ProductDetailComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
