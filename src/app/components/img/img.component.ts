import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})

// cuando implementamos una nueva interfaz tenemos que implementar un metodo para que no salga error :D
// aqui se exporto "OnChanges" y "AfterViewInit"
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @Input() img: string = '';
  @Output() load = new EventEmitter<string>();
  imageDefault = "./assets/images/si.jpg"

  // el constructor es lo primero que corre antes de renderizar.
  // es importante que no corras cosas asincronas
  // esto corre solo una vez
  constructor() {
    console.log('constructor', 'imgValue => ', this.img);
  }

  // esto es un metodo implementado :O
  ngOnChanges() {
  // este corre antes y durante del render
  // actualiza los cambios en los inputs o_O muchas veces, tantas como nosotros los actualicemos
  console.log('ngOnChanges', 'imgValue => ', this.img);
  }

  ngOnInit(): void {
    // este tambien corre antes de renderizarse : /
    // aqui si podemos correr cosas asincronas :D
    // tambien corre una sola vez D:
    console.log('ngOnInit', 'imgValue => ', this.img);
  }

  ngAfterViewInit() {
    // este corre depsues del render
    // aqui normalmente se manejan los hijos
    console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    // este borra componentes, se borra de la interfaz y deja de existir
    console.log('ngOnDestroy');
  }

  imgError(){
this.img = this.imageDefault;
  }

  // con esto emitimos eventos desde el hijo al padre, requiere importar "OutPut" y "EventEmitter"
  imgLoad(){
console.log('log hijo');
this.load.emit(this.img);
}

}
