import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroceryComponent } from './grocery/grocery.component';
import { HttpClientModule } from '@angular/common/http';
import { GroceryserviceService } from './service/groceryservice.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { Color,Label } from 'ng2-charts';
import { GrocerychartComponent } from './grocerychart/grocerychart.component';
@NgModule({
  declarations: [
    AppComponent,
    GroceryComponent,
    GrocerychartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    RouterModule,
    FormsModule,
    ChartsModule   
  ],
  providers: [GroceryserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
