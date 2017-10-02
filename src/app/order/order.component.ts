import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { AppService } from "../app.service";
import 'rxjs/add/operator/switchMap';
import { Order } from "./order.interface";
@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
 
 orderDet : Order;
constructor( private route: ActivatedRoute,private _service :AppService){
   
}
ngOnInit(){
  this.route.paramMap.switchMap((params : ParamMap) => this._service.getOrder(params.get('userName')))
  .subscribe(data => this.orderDet = data) ;

   
  }
}
