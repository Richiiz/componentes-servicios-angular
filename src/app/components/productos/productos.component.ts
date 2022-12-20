import { Component, OnInit } from '@angular/core';

import { Product, CreateProductDTO, UpdateProductDTO } from '../../models/product.models';

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
  createNewProduct(){
    // se tipa para que nos ayude, con el tipado ya sabra que nosotros vamos a crear un producto
    // este CreateProductDTO viene del archivo product.models.ts
    const product: CreateProductDTO = {
      title: 'Nuevo producto',
      description: 'bla bla bla',
      images: ['https://young-sands-07814.herokuapp.com/api/products'],
      price: 1000,
      categoryId: 2,
    }
    this.productsService.create(product)
      .subscribe(data => {
        // con esto insertamos los datos que se asignan
        this.products.unshift(data);
    });
  }

  updateProduct() {
    const changes: UpdateProductDTO = {
      // tipamos de nuevo para que nos ayude a corroborar cuales son los elementos que se estaran editando.
      // no obliga a cambiar lo demas ya que son opcionales.
      title: 'nuevo titulo',
    }
    const id = this.productChosen.id;
    this.productsService.update(id, changes)
    .subscribe(data => {
      // console.log('update', data);
      const productIndex = this.products.findIndex(item => item.id === this.productChosen.id);
      this.products[productIndex] = data;
    });
  }

}
