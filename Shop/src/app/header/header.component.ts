import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedin=false;

  constructor(private router:Router, private userService:UserService) { 

  }

  ngOnInit(): void {
    this.userService.currentMessageSubscriber.subscribe(res=>{
      
    this.isLoggedin =this.userService.isLoggedIn()
    })

    this.isLoggedin =this.userService.isLoggedIn()
    console.log(this.isLoggedin+"hero")

 
  }

  showWishList(){
    // alert("show wishlist")

    this.router.navigate([('/wishlist')])
  }
  logout(){
    localStorage.removeItem('token')
    this.isLoggedin= false
  }

}
