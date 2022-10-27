import { Injectable } from '@angular/core';
import { Product } from '../models/product.models';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppingCar: Product[] = [];

  constructor() { }

  addProduct(product: Product){
    this.myShoppingCar.push(product);
  }

  getShoppingCart(){
    return this.myShoppingCar;
  }

getTotal(){
  return this.myShoppingCar.reduce((sum, item) => sum + item.price, 0);
}

}
