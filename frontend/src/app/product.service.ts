import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Product } from './product';

@Injectable()
export class ProductService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private url = 'http://localhost:8080/products';

  constructor(private http: Http) { }

  getProducts(): Promise<Product[]> {
    return this.http.get(this.url)
               .toPromise()
               .then(response => response.json() as Product[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  
}
