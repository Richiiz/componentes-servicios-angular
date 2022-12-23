import { Injectable } from '@angular/core';
// servicio de angular para obtener datos de API
import { HttpClient, HttpParams} from '@angular/common/http'
// este import nos permite reintentar un metodo las veces que queramos
import { retry } from 'rxjs/operators';

import { Product, CreateProductDTO, UpdateProductDTO} from './../models/product.models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // no enviariamos directamente con la peticion si no que simp,emente se pone el end point
  // el proxy se encargara de todo lo que venga de la api
  // la peticion no sale desde el puerto 4200 que es donde esta alojado el server si no que sale desde el link, e interpreta que no hay problema de CORS
  private apiUrl = '/api/products'

  constructor(
    private http: HttpClient
  ) { }

  // una manera de poder obtener los productos de forma dinamica sin dos metodos (que son getPtoduct y getProductsByPage) es la siguiente
  // le ponemos el limit y el offset al metodo de manera opcional, si no los envia, simplemente envia los 50 productos
  getAllProducts( limit?: number, offset?: number ) {
    // creamos parametros para que obtenga los datos de forma dinamica
    let params = new HttpParams();
    // si el limit y el offset vienen entonces configuramos los parametros
    if (limit && offset) {
      params = params.set('limit', limit);
      params = params.set('offset', limit);
    }
    return this.http.get<Product[]>(this.apiUrl, { params })
    .pipe(
      retry(3)
      );
  }
  getProduct(id: string) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  getProductsByPage(limit: number, offset: number){
    return this.http.get<Product[]>(`${this.apiUrl}`, {
      params: { limit, offset }
    })
  }

  // a la hora de llamar al servicio create tengo que enviarle la interfaz de tipo Product
  create(dto: CreateProductDTO) {
    // nota que cada ves se hace un return para poder obtener la info
    // se espera que un post retorne es un producto
    return this.http.post<Product>(this.apiUrl, dto);
  }

  update(id: string, dto: UpdateProductDTO) {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, dto);
  }

  // no necesitamos datos especiales, solo el id del producto que vamos a eliminar
  delete(id: string) {
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`);
  }
}
