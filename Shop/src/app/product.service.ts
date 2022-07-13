import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseurl:string="http://localhost:9090/";
  constructor(private http:HttpClient) { }

  getMessage(){
    return this.http.get(`${this.baseurl}message`,{responseType: 'text'});
  }

  getProducts(){
    return this.http.get(`${this.baseurl}products`);
  }

  getProductById(id:any){
    return this.http.get(`${this.baseurl}product/`+id);
  }
}
