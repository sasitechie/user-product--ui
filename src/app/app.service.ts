import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import {  User} from "./User.interface";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { Product } from "./product.interface";
import { Order } from "./order/order.interface";

@Injectable()
export class AppService{
    constructor(private _http : HttpClient){

    }

    getUserVal() : Observable<User>{
        return this._http.get('http://localhost:8090/main/user').map(data=>data as User);
    }

    getProductVal() : Observable<Product>{
        return this._http.get('http://localhost:9090/main/product').map(data=>data as Product);
    }

    getOrder(userName :string) : Observable<Order>{
        
        return this._http.get('http://localhost:9090/main/orders/'+userName).map(data=>data as Order);
    }

    updateUser(userData :User) :Observable<User>{
        
        return this._http.post('http://localhost:8090/main/update', userData).map(data=>data as User);
    }

}