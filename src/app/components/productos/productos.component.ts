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
  showProductDetail = false;
  productChosen: Product = {
    // siempre se pone un estado por defecto RECUERDALO
    id: '',
    price: 0,
    images: [],
    title: '',
    category: {
      id: '',
      name: '',
    },
    description: '',
  }
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

toggleProductDetails() {
  this.showProductDetail = !this.showProductDetail;
}

onShowDetail(id: string){
  this.productsService.getProduct(id)
  .subscribe(data => {
    // se pone la funcion que activa y desactiva el layout, tardara en mostrarse dependiendo lo que tarde en cargar la info
    this.toggleProductDetails();
    // traemos la info y la guardamos en una variable
    this.productChosen = data;
  })
  }

}
