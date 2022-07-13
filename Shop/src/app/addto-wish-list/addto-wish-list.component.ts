import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-addto-wish-list',
  templateUrl: './addto-wish-list.component.html',
  styleUrls: ['./addto-wish-list.component.css']
})
export class AddtoWishListComponent implements OnInit {

  products:any;

  constructor(private service:WishlistService) { }

  ngOnInit(): void {

    this.service.getProductsInWishList().subscribe(res=> {
      this.products = res;
    })

}
}
