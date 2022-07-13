import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateserviceService {
  baseUrl:string = "http://localhost:8080/";
  constructor(private http:HttpClient) { }

  getData(id:any){
    return this.http.get(`${this.baseUrl}getData/`+id);
  }
}
