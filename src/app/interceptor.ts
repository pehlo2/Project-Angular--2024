import { Injectable, Provider } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
const { apiUrl } = environment


@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (request.url.startsWith('/api')) {

      request = request.clone({
        url: request.url.replace('/api', apiUrl),
        withCredentials: true
      })
    }
    return next.handle(request);
  }
}

export const AppInterceptorProvider: Provider = {
  multi: true,
  useClass: AppInterceptor,
  provide: HTTP_INTERCEPTORS
}