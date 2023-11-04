import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent  implements OnInit {
  query : any;
  productoSub: Subscription = new Subscription();
  listProducto: any;
  stars: number[] = [1, 2, 3, 4];
  
  constructor(private _router: Router, private aRouter: ActivatedRoute, private _productService: ProductService){}

  ngOnInit(): void {
    this.query = this.aRouter.snapshot.paramMap.get('id');
    this.consultar(this.query);
  }
  
  consultar(product: any){
    this.listProducto = [];
    this._productService.getProductById(product).subscribe(element =>{
      this.listProducto.push(element);
    })
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



}
