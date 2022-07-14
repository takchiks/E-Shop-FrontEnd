
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private messageSource = new BehaviorSubject('default message');
  public currentMessageSubscriber = this.messageSource.asObservable();

  baseUrl:string = "http://localhost:9090/";

  constructor(private http:HttpClient, private router:Router) {}

    register(form:any){
      return this.http.post(`${this.baseUrl}`+"register", form);
    }

    // login(form:any){

    //   this.router.navigate([('login/'+form.username+form.password)])
    //   //return this.http.post(`${this.baseUrl}`+"login", form, {responseType: 'text'});
    // }

   token(form:any){
    return this.http.post(`${this.baseUrl}`+"token", form,{responseType:'json'});
   }
   loginUser(token:any){
    localStorage.setItem('token',token);
   }
   isLoggedIn(){
    var token = localStorage.getItem('token')
    console.log("maf  :"+token)
    if(token==null||token==''|| token== undefined){
      return false;
    }else{
      return true;
    }
   }
   logout(){
     localStorage.removeItem('token')
     this.isLoggedIn()
   }
 

notify(message: any) {
  this.messageSource.next(this.isLoggedIn().toString())
}

}
