import { Component } from '@angular/core';


// aqui volvemos a importar nuestro tipado especifico para no tener que reescribir codigo
import  {Product} from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

showImg = true;


// clase puesta en la class binding
widthImg = 10

// aqui añadimos el tipado que se importo, recuerda que es buena practica tipar :D.
// el tipado nos ayuda a verificar que todo este  correcto,
// recuerda tambien que los arrays deben tener los mismos elementos del tipado, si no, indicara error.

  imgParent = '';

  onLoaded(img: string){
    console.log('log Padre', img);

  }

  // con esto cambiamos el elemento y lo matamos
  toggleImg(){
    this.showImg = !this.showImg
  }
}
