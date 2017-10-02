import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { Router,ActivatedRoute } from "@angular/router";
import { AppService } from "../app.service";
import { Product } from "../product.interface";
import { Data } from "../data"
import { NgForm , FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User  } from "../User.interface";
@Component({
  selector: 'update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
 
  userId : string;
  username : string;
  mobile :string;
  userForm : FormGroup;
  updatedVal : User;
  showMsg = false;
constructor(private _fb : FormBuilder,private _data: Data,private _service : AppService){
 
  this.userId = this._data.userData.userId;
  this.username = this._data.userData.userName;
  this.mobile = this._data.userData.mobile;
console.log("USERDATA---->"+JSON.stringify(this._data.userData.userName));
}

onSubmit(form :FormGroup){
  
  this._service.updateUser(form.value).subscribe(data=>{
    this.updatedVal = data
    
    console.log("updatedVal-->"+this.updatedVal.msg);
  });
  this.showMsg = true;
 this.userForm.reset();
}
ngOnInit(){
  this.userForm = this._fb.group({
    'userId' : [this.userId],
    'userName' : [this.username, Validators.required],
    'mobile' : [this.mobile, Validators.required],
    'msg' : ['']
  
  });
  }
}
