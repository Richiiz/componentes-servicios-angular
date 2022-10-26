import { Component } from '@angular/core';

// aqui volvemos a importar nuestro tipado especifico para no tener que reescribir codigo
import  {Product} from './models/product.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
// clase puesta en la class binding
widthImg = 10

// aqui añadimos el tipado que se importo, recuerda que es buena practica tipar :D.
// el tipado nos ayuda a verificar que todo este  correcto,
// recuerda tambien que los arrays deben tener los mismos elementos del tipado, si no, indicara error.
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

  imgParent = '';

  onLoaded(img: string){
    console.log('log Padre', img);

  }
}
