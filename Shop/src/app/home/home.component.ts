
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { WishlistService } from '../wishlist.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedin=false;
  //message:any;
    products:any;

  constructor(private service:ProductService, private router:Router,
    private wishListService:WishlistService, private userService:UserService) {
      console.log("inside const of HomeComponent")
   }

  ngOnInit(): void {

    this.service.getProducts().subscribe(res=>{
      this.products=res;
    })

    this.userService.currentMessageSubscriber.subscribe(res=>{
      
      this.isLoggedin =this.userService.isLoggedIn()
      console.log(this.isLoggedin+"hero")
      })

  }

  moreDetails(id:any) {
    console.log("inside moredetails() "+id)

    this.router.navigate([('/pdp/'+id)])
  }

  addtoWishList(id:any) {
    console.log("inside addtoWishList() "+id)

    this.wishListService.addtoWishList(id).subscribe(res=>{
      var message=res;
      console.log(message)
    })
  }
}


  

  


