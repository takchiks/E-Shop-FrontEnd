import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PdpComponent } from './pdp/pdp.component';
import { AddtoWishListComponent } from './addto-wish-list/addto-wish-list.component';
import { UpdateComponent } from './update/update.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent,
    canActivate:[AuthGuard]

  },
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"pdp/:id",
    component:PdpComponent,
    canActivate:[AuthGuard]
  },
  {path:"wishlist",
   component:AddtoWishListComponent,
   canActivate:[AuthGuard]
  },
  {
    path:"update",
   component:UpdateComponent,
   canActivate:[AuthGuard]
  },
  {path:"login/:username/:password",
   component:HomeComponent,
   canActivate:[AuthGuard]
  },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
