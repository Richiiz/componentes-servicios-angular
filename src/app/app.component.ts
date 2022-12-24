import { Component } from '@angular/core';

// aqui volvemos a importar nuestro tipado especifico para no tener que reescribir codigo
import {AuthService} from './services/auth.service'
import {UsersService} from './services/users.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
imgParent = '';
showImg = true;
token = '';

constructor(
  private authService: AuthService,
  private UsersService: UsersService,
) {

}


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

  createUser() {
    this.UsersService.create({
      name: 'richi',
      email: 'richi@gmail.com',
      password: '1212'
    })
    .subscribe(rta => {
      console.log(rta);
    });
  }

login(){
    this.authService.login('richi@gmail.com', '1212')
    .subscribe(rta => {
      this.token = rta.access_token;
    });
  }
}
