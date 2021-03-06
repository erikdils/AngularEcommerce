import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})


export class ApiService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('http://localhost:3000/products').toPromise()
  };

  createProduct(product) {
    return this.http.post('http://localhost:3000/product', product, httpOptions).toPromise();
  };

  newPrice(_id, price) {
    return this.http.put('http://localhost:3007/task-price', {_id, price}, httpOptions).toPromise();
  };

  done(_id) {
    return this.http.put('http://localhost:3007/task-done', { _id }, httpOptions).toPromise();
  };

  delete(_id) {
    return this.http.delete('http://localhost:3007/task/' + _id).toPromise();
  };

}
