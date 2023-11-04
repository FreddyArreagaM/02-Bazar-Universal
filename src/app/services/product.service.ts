import { Injectable } from '@angular/core';
import { Observable, defaultIfEmpty, filter, find, map, of, take } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  rutaUrl = '../../assets/data/products.json'
  constructor(private http: HttpClient) {}
  producto: any;

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.rutaUrl);
  }

  //Metodo para buscar productos a travez de una palabra clave
  buscarProductos(keyword: string): Observable<any[]> {
    keyword = keyword.toLowerCase();
    return this.getData().pipe(
      map((data: any) =>
        data.products.filter((product: any) =>
          this.productContainsKeyword(product, keyword)
        )
      )
    );
  }

  productContainsKeyword(product: any, keyword: string): boolean {
    for (const key in product) {
      if (typeof product[key] === 'string') {
        if (product[key].toLowerCase().includes(keyword)) {
          return true;
        }
      }
    }
    return false;
  }

/*
  //Metodo para obtener un producto por medio del id
  getProductById(id: number): Observable<any> {
    const producto = this.getData().pipe(
      map((product: any) => {
        console.log(product.products);
        product.products.forEach((element:any) => {
          if(element.id == id){
            console.log(element);
            return element;
          }
        });
      }
      )
    );
    console.log(producto);
    return producto;
  }*/

  getProductById(id: number): Observable<any> {
    return this.getData().pipe(
        map((product: any) => product.products.find((element:any) => element.id == id))
      )
  }
}


  /*getProductById(id: number): Observable<any> {
    return this.getData().pipe(
      filter((products: any[]) => products.some((product) => product.id === id))
    );
  }*/