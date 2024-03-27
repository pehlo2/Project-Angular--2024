import { Injectable, Provider } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ErrorService } from './core/error/error.service';
const { apiUrl } = environment



@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(private router:Router, private errorService:ErrorService) { }
  errorMessage: string = ''

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("http req started");

    if (request.url.startsWith('/api')) {

      request = request.clone({
        url: request.url.replace('/api', apiUrl),
        withCredentials: true
      })
    }
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'An unknown error occurred';
        if (error.error instanceof ErrorEvent) {
          errorMessage = `Error: ${error.error.message}`;
        } else {
          errorMessage = `${error.error.message}`;
        }
        this.errorService.setErrorMessage(errorMessage);
        return throwError(errorMessage);
      })
    );

  }
}

export const AppInterceptorProvider: Provider = {
  multi: true,
  useClass: AppInterceptor,
  provide: HTTP_INTERCEPTORS
}