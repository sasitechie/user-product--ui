import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from "./material.module";
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppService } from "./app.service";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app.routing";
import { OrderComponent } from "./order/order.component";
import { HomeComponent } from "./home/home.component";
import {UpdateProfileComponent  } from "./update-profile/update-profile.component";
import { StockComponent } from "./stock/stock.component";
import {  Data} from "./data";
@NgModule({
  declarations: [
    AppComponent,OrderComponent,HomeComponent,UpdateProfileComponent,StockComponent
  ],
  imports: [
    BrowserModule,MaterialModule,AppRoutingModule, FormsModule, ReactiveFormsModule,HttpModule,HttpClientModule, FlexLayoutModule
  ],
  providers: [AppService, Data],
  bootstrap: [AppComponent]
})
export class AppModule { }
