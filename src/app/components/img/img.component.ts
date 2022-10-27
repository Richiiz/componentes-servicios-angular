import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})

// cuando implementamos una nueva interfaz tenemos que implementar un metodo para que no salga error :D
// aqui se exporto "OnChanges" y "AfterViewInit"
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {



  img: string = '';
// aqui solamente estamos escuchando un elemento en ves de poner todos los demas que estan abajo, asi aseguramos escuchar uno solo en ves de todos
// como esta puesto en el componente ngOnChanges
  @Input('img')
  set changeImg(newImg: string){
    this.img = newImg;
    console.log('cambios solo en img =>' ,this.img)
    // codigo
  }


  @Input() alt: string = '';

  // @Input() alt2: string = '';
  // @Input() alt3: string = '';



  @Output() load = new EventEmitter<string>();
  imageDefault = "./assets/images/si.jpg"

  // counter = 0;
  // counterFn: number | undefined;





  // el constructor es lo primero que corre antes de renderizar.
  // es importante que no corras cosas asincronas
  // esto corre solo una vez
  constructor() {
    console.log('constructor', 'imgValue => ', this.img);
  }

  // esto es un metodo implementado :O
  ngOnChanges(changes: SimpleChanges) {
  // este corre antes y durante del render
  // actualiza los cambios en los inputs o_O muchas veces, tantas como nosotros los actualicemos
  console.log('ngOnChanges', 'imgValue => ', this.img);
  // esta linea escucha todos los cambios de todos los inputs, lo que representa una ventaja y desventaja dependiendo del caso
  console.log('changes', changes);
  }

  ngOnInit(): void {
    // este tambien corre antes de renderizarse : /
    // aqui si podemos correr cosas asincronas :D
    // tambien corre una sola vez D:
    console.log('ngOnInit', 'imgValue => ', this.img);
  // con esto correremos un contador que se autosuma cada segundo
  // this.counterFn = window.setInterval(()=>{
    //   this.counter += 1;
    //   console.log('corriento counter');
    // }, 1000)
}

  ngAfterViewInit() {
    // este corre depsues del render
    // aqui normalmente se manejan los hijos
    console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    // este borra componentes, se borra de la interfaz y deja de existir
    console.log('ngOnDestroy');
    // esta es la manera correcta de matar un elemento
    // window.clearInterval (this.counterFn)
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
