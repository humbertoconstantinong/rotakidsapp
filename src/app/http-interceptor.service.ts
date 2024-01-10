import { HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { LoaderService } from './services/loader.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService {

  constructor(private loaderService: LoaderService) { }


  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loaderService.show();

    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            this.loaderService.show();
          }
        },
        (error) => {
          this.loaderService.hide();
        }
      )
    );
  }

}
