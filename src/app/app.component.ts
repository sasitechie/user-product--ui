import { Component, OnInit } from '@angular/core';
import { User } from "./User.interface";
import { Product } from "./product.interface";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { AppService } from "./app.service";
import { Router ,NavigationExtras} from "@angular/router";
import { Data } from "./data";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userName : string;
  userVAl: User;

  constructor(private _service: AppService, private _route: Router, private _data : Data) {
    this._service.getUserVal().subscribe(data => { this.userVAl = data });
  }
  order() {
    this.userName= this.userVAl.userName;
   
    this._route.navigate(['order',  this.userName]);
  }

  update(){
   this._data.userData=this.userVAl;
  
   this._route.navigate(['update-profile']);
  }
  ngOnInit() {

  }
}
