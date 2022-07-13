import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  products:any;

  constructor(private service:WishlistService) { }

  ngOnInit(): void {

      this.service.getProductsInWishList().subscribe(res=> {
        this.products = res;
      })

  }

}
