import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class CommService {
  readonly baseUrl: string = 'https:localhost:3000' + `/`;

  constructor(private http: HttpClient) { }

  public get(url, params = []) {
    return this.http.get(`${this.baseUrl}${url}`, { headers: this.setHeaders(), params: this.setParams(params) })
        .pipe(
            catchError(this.handleError)
        );
}


  public post(url, body) {
    return this.http.post (url, body)
      .pipe(
        catchError(this.handleError)
      );
  }

  
  private setParams(parames: Array<{ key: string, value: string }>): HttpParams {
    let newGetParams = new HttpParams();

    parames.forEach((param) => {
        newGetParams = newGetParams.append(param.key, param.value);
    })

    return newGetParams;
}

private setHeaders(): HttpHeaders {
    // TODO: Get the real token
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6IkhGLk1vc2hlIiwicmV0YWlsZXJfY29kZSI6IjkiLCJjcGdfY29kZSI6IiIsInJvbGVzIjpbIm1hcmtldGVyIiwiYWRtaW4iXSwibW9uZ29Db25uZWN0aW9uU3RyaW5nIjoibW9uZ29kYitzcnY6Ly9hZG1pbjpiUE1uSno5NDJNdUxQNnpkQGNsdXN0ZXIwLWxlcHNhLmF6dXJlLm1vbmdvZGIubmV0L3hhY3QtaGYiLCJpYXQiOjE1OTg1MTQ5NTEsImV4cCI6MTU5ODYwMjQzMX0.ZagvZIHZKb_wvpTnvP_sYtfC1KDnngcVf-Q8qJbb1EU';
    const newHeaders: HttpHeaders = new HttpHeaders({
        Authorization: token
    });
    return newHeaders;
}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
