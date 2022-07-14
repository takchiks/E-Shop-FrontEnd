import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router, private http:HttpClient, private service:UserService) { 
    console.log("inside const of RegisterComponent")
  }

  ngOnInit(): void {

  }

  register(form:any) {
    console.log("inside register() "+form.username+", "+form.firstName+", "+form.lastName+", "+form.password+", "+form.email+", "+form.phone);

    this.service.register(form).subscribe(res=>{
      
      this.router.navigate([('/login')])
    })
  }



}
