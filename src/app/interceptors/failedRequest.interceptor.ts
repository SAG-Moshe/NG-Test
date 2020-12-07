import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, EMPTY, throwError } from 'rxjs';
import { retryWhen, catchError, map, retry } from 'rxjs/operators';

@Injectable()
export class FailedRequestInterceptor implements HttpInterceptor {

    constructor() {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(req).pipe(
            retry(5),
            catchError((error) => {
                return throwError(error);
            })
        );

        // return next.handle(req).retryWhen((error) => {
        //     return error.flatMap((err) => {
        //         if (err instanceof HttpErrorResponse && err.status === 504) { // timeout

        //             return Observable.of(err.status).delay(5000);
        //         }
        //         const errorMessage = `${new Date()}, There was an error for: ${req.url}`;

        //         let failedConnectivityLog = localStorage.getItem('failedConnectivityLog');

        //         if (failedConnectivityLog) {
        //             failedConnectivityLog += `| ${errorMessage}`;
        //         } else {
        //             failedConnectivityLog = errorMessage;
        //         }
        //         localStorage.setItem('failedConnectivityLog', failedConnectivityLog);
        //         return Observable.throw({ error: errorMessage});

        //     })
        //     .take(1)
        //     .concat(Observable.throw({ error: `${new Date()}, There was an error for: ${req.url}` }));
        // });
        // return next.handle(req).pipe(
        //     catchError((val) => 
        //     {
        //         return of(`I caught: ${val}`)
        //     })
        // );
    }
}
