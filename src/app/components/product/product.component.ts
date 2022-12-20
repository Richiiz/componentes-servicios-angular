// en esta clase añadimos el OutPut para hacer una comunicacion al padre que en este caso seria productos

// aqui ya estamso recibiendo el array desde el padre añadiendo el "Input"
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// aqui importamos nuestro tipado, ese tipado se creo añadiendo una nueva carpeta llamada "models" y haciendo nuestro archivo prodyc.models.ts
import { Product } from '../../models/product.models'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

// recuerda que es buena practica tipar los arrays que hagamos, los tipamos añadiendo ":" y nuestor tipado, despues asignamos con los "{}"
// esto se enviara desde el padre para no ser renderizado desde este componente para poderse reusar.
// aqui no podemos definir en vacio el product, ya que angular siempre pide tner un estado inicial de un elemento
// podemos poner los elementos del array opcionales pero no es tan buena practica en algunos casos, tenemos que poner los elementos del array sin nada y asi queda perfect papu.
  @Input() product: Product = {
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
    // aqui empezamos a hacer que el padre escuche el evento
  @Output() addedProduct = new EventEmitter<Product>();
  //una ves mas comunicamos nuestro evento hijo al padre
  @Output() showProduct = new EventEmitter<string>();

  constructor() { }


  // informacion para mantener estilos de codificacion
  ngOnInit(): void {
  }

  onAddToCart(){
    // aqui empezamos a hacer que el padre escuche el evento
    this.addedProduct.emit(this.product)
  }

  onShowDetail() {
    this.showProduct.emit(this.product.id);
  }
}
