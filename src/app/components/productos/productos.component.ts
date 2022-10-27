import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product.models';

import { StoreService } from '../../services/store.service'

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {


  myShoppingCar: Product[] = [];
  total = 0;

  products: Product[] = [
    {
      id: '1',
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/si.jpg'
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bici.jpg'
    },
    {
      id: '3',
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      id: '4',
      name: 'Mis libros',
      price: 23,
      image: './assets/images/libro.jpg'
    },
  ]

  constructor(
    // de esta manera se usa un servicio de tienda dentro de un componente
    private storeService: StoreService
  ) {
    this.myShoppingCar = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
  }


  onAddToShoppingCar(product: Product){
    // this.myShoppingCar.push(product);

    this.storeService.addProduct(product);
    // reduce es un metodo dentro de los arrays, y sirve para calcular y reducir todo a un valor
    this.total =  this.storeService.getTotal();
  }

}
