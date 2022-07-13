import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  baseurl:string="http://localhost:9090/"
  constructor(private http:HttpClient) {}
  
  addtoWishList(id:any){
    return this.http.get(`${this.baseurl}addToWishList/`+id)
  }

  getProductsInWishList(){
    return this.http.get(`${this.baseurl}wishlist/`);
  }
   
}
