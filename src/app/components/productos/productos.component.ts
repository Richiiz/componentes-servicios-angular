import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product.models';

import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {


  myShoppingCar: Product[] = [];
  total = 0;

  products: Product[] = [];
  today = new Date();
  date = new Date(2021, 1, 21)

  constructor(
    // de esta manera se usa un servicio de tienda dentro de un componente
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShoppingCar = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe(data => {
      this.products = data;
    });
  }


  onAddToShoppingCar(product: Product){
    // this.myShoppingCar.push(product);

    this.storeService.addProduct(product);
    // reduce es un metodo dentro de los arrays, y sirve para calcular y reducir todo a un valor
    this.total =  this.storeService.getTotal();
  }

}
