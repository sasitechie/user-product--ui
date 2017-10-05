import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { AppService } from "../app.service";
import 'rxjs/add/operator/switchMap';
import { Stock } from "../stock.interface";

@Component({
  selector: 'stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
 
 stockDet :Stock[];
constructor( private route: ActivatedRoute,private _service :AppService){
   
}
ngOnInit(){
  this._service.getStockVal().subscribe(data => this.stockDet = data) ;

   
  }
}
