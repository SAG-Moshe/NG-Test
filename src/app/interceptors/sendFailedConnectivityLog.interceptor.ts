import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SendFailedConnectivityLogInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const failedConnectivityLog = localStorage.getItem('failedConnectivityLog');
        if (failedConnectivityLog) {
            console.log(`failedConnectivityLog - ${failedConnectivityLog}`);
            // TODO send logs
            localStorage.removeItem('failedConnectivityLog');
        }
        return next.handle(req);
    }
}