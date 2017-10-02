import {Routes, RouterModule  } from "@angular/router";
import { OrderComponent } from "./order/order.component";
import { HomeComponent } from "./home/home.component";
import { UpdateProfileComponent } from "./update-profile/update-profile.component";
const routes  : Routes=[
    {path : '', redirectTo:'/home', pathMatch:'full'},
    {path : 'home', component : HomeComponent},
    {path : 'order/:userName', component : OrderComponent},
    {path : 'update-profile', component : UpdateProfileComponent}
];

export const AppRoutingModule = RouterModule.forRoot(routes);