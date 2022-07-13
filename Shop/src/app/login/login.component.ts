import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  jwtJson:any;
  

  constructor(private service:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  dologin(form:any){
    alert("The form is holding "+form.username+", "+ form.password)
    
    this.service.token(form).subscribe(res=>{
      this.jwtJson =res 

    alert("The token is holding "+this.jwtJson.token)
      let token:string = this.jwtJson.token;
      this.service.loginUser(token)
      // localStorage.setItem("token",token)
      this.service.notify({isRefresh:true});
      
      this.router.navigate([('/')])


    })
  }


}
