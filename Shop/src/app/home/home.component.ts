
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //message:any;
    products:any;

  constructor(private service:ProductService, private router:Router,
    private wishListService:WishlistService) {
    alert("inside const of HomeComponent")
   }

  ngOnInit(): void {
    /*alert("inside ngOnInit of HomeComponent")
    this.service.getMessage().subscribe(res=> {
      this.message=res;
    })*/
    this.service.getProducts().subscribe(res=>{
      this.products=res;
    })

  }

  moreDetails(id:any) {
    alert("inside moredetails() "+id)

    this.router.navigate([('/pdp/'+id)])
  }

  addtoWishList(id:any) {
    alert("inside addtoWishList() "+id)

    this.wishListService.addtoWishList(id).subscribe(res=>{
      var message=res;
      alert(message)
    })
  }
}


  

  


