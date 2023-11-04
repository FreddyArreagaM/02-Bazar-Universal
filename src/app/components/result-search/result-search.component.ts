import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.scss'],
})
export class ResultSearchComponent  implements OnInit, OnDestroy {
  query : any;
  listEncontrados : any [] = [];
  product : Subscription = new Subscription();
  stars: number[] = [1, 2, 3, 4];
  producto: any;

  constructor(private _productService: ProductService, private _routeA: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._routeA.queryParams.subscribe((params) => {
      this.query = params['search'];
    });
    this.consultar(this.query);
  }

  ngOnDestroy(){
    this.product.unsubscribe();
  }

  consultar(product: any){
    this.listEncontrados = [];
    this.product = this._productService.buscarProductos(product).subscribe(data =>{
      data.forEach(element => {
        this.producto = this.query;
        this.listEncontrados.push(element);
        console.log(this.listEncontrados);
      });
    })
  }

  buscar(){
    this.consultar(this.query);
  }

  //producto.rating - calcular(producto.rating) > 0
  calcular(rating: any): any{
    const valor = rating;
    const resultado = valor - Math.floor(valor) > 0;
    if(resultado){
      return true;
    }else{
      return false;
    }
  }

  back(){
    // Utiliza el método navigate para redirigirte a la ruta raíz ("/")
    this._router.navigate(['/']);
  }

  //Metodo para enviar producto a detalle
  detail(productoID: any){
    console.log("ID Producto: "+ productoID);
    this._router.navigate(['/items',productoID]);
  }
}
