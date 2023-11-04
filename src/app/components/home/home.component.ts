import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit, OnDestroy{
  producto = '';
  listProductos : any;
  loading = false;
  setTime: any;

  constructor(private _productService: ProductService, private _router: Router) { }


  ngOnInit() {
    this._productService.getData().subscribe(data =>{
      this.listProductos = data;
      this.producto = '';
    })
  }

  ngOnDestroy(): void {
    this.listProductos = [];
  }

  //Metodo para buscar artículo
  buscar(){
    this.loading = true;
    setTimeout(()=>{
      this.loading = false;
      if(!this.loading){
        this._router.navigate(['/items'], { queryParams: { search: this.producto } });
      }
    },2000);

  }

}
