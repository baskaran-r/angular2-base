import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';

@Injectable()
export class AjaxService {
  private apiUrl = '/api';

  constructor(private http: Http) { }

  public fetch (url): Observable<any> {
    return this.http.get(this.buildUrl(url))
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  public post (url, data): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.buildUrl(url), data, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  public put (url, data): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.put(this.buildUrl(url), data, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  public delete (url, data): Observable<any> {
    return this.http.delete(this.buildUrl(url))
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private buildUrl (url) {
    return this.apiUrl + url;
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: Response | any) {
    let errMsg: string;

    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg, error);
  }

}
