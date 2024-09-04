import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ProductsI } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class FakestoreServiceService {
  private url: string = "https://fakestoreapi.com/";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductsI[]>{
    let urlApi = this.url + "products"
    console.log(urlApi)
    return this.http.get<any[]>(urlApi, {headers: this.headers});
  }

}
