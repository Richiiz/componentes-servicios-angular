import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() img: string = '';
  @Output() load = new EventEmitter<string>();
  imageDefault = "./assets/images/si.jpg"

  constructor() { }

  ngOnInit(): void {
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
