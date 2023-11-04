import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Compopnents
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ResultSearchComponent } from './components/result-search/result-search.component';

@NgModule({
  declarations: 
  [
    AppComponent, 
    HomeComponent,
    ProductDetailComponent,
    ResultSearchComponent
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HttpClientModule, 
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
