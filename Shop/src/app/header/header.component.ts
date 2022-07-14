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
    console.log(this.isLoggedin+"hero")
    })

    // this.isLoggedin =this.userService.isLoggedIn()
   

 
  }

  showWishList(){
    // alert("show wishlist")

    this.router.navigate([('/wishlist')])
  }
  logout(){
    localStorage.removeItem('token')
    
    this.userService.notify({isRefresh:true});
  }

}
