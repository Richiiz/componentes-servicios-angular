import { Injectable } from '@angular/core';
// servicio de angular para obtener datos de API
import {HttpClient} from '@angular/common/http'

import { Product, CreateProductDTO} from './../models/product.models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = 'https://young-sands-07814.herokuapp.com/api/products'

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<Product[]>(this.apiUrl);
  }
  getProduct(id: string) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  // a la hora de llamar al servicio create tengo que enviarle la interfaz de tipo Product
  create(dto: CreateProductDTO) {
    // nota que cada ves se hace un return para poder obtener la info
    // se espera que un post retorne es un producto
    return this.http.post<Product>(this.apiUrl, dto);
  }
}
