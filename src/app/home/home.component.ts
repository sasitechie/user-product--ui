import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { Router } from "@angular/router";
import { AppService } from "../app.service";
import { Product } from "../product.interface";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  prodVal : Product;
  
constructor( private _route :Router,private _service : AppService){
   
    this._service.getProductVal().subscribe(data=>{this.prodVal = data});
}
ngOnInit(){
  
  }
}
