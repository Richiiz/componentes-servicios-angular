import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
// tab lo que hace es correr un proceso sin tener que modificar o cambiar algo la respuesta que se envie
import { tap } from 'rxjs/operators';

@Injectable()
export class TimeInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const start = performance.now();
    return next
    .handle(request)
    .pipe(
      tap(() => {
        const time = (performance.now() - start)+ 'ms';
        console.log(request.url, time);
      })
    )
  }
}
