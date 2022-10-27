import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product.models';

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

  constructor() { }

  ngOnInit(): void {
  }


  onAddToShoppingCar(product: Product){
    this.myShoppingCar.push(product);
    // reduce es un metodo dentro de los arrays, y sirve para calcular y reducir todo a un valor
    this.total =  this.myShoppingCar.reduce((sum, item) => sum + item.price, 0);
  }

}
