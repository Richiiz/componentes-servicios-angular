import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
// clase puesta en la class binding
widthImg = 10


  imgParent = '';

  onLoaded(img: string){
    console.log('log Padre', img);

  }
}
