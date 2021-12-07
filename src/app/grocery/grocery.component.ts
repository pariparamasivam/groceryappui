import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GroceryPriceDataResponse } from '../grocery-price-data-response';
import { GroceryserviceService } from '../service/groceryservice.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent implements OnInit {

  grocerypricedata: GroceryPriceDataResponse[] = [];
  config: any;
  itemNameSearchStr = '';
  errorMessage = '';
  collection = { count: 60, data: [] };
  constructor(private activedRoute:ActivatedRoute, private router:Router, private groceryservice:GroceryserviceService) { }
   // On Load - Get item details which has max price.
  ngOnInit(): void {
    this.groceryservice.getItemNameByMaxPrice().subscribe((res) => {
   this.grocerypricedata = res;
   console.log(this.grocerypricedata );

    });
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.grocerypricedata.length
    };
    
  }
pageChanged(event:any){
    this.config.currentPage = event;
  }

 //Get Item Name by Search Text.
  searchItemName(): void {
    this.errorMessage = '';
    if(this.itemNameSearchStr != null && this.itemNameSearchStr.length != 0) {
    this.groceryservice.getGroceryByItemNameContains(this.itemNameSearchStr).
      subscribe(
        response => {
          this.grocerypricedata = response;
          this.config = {
            itemsPerPage: 10,
            currentPage: 1,
            totalItems: this.grocerypricedata.length
          };
        },
        error => {
          var parsedJSON = JSON.parse(JSON.stringify(error));
          this.errorMessage = parsedJSON['error'][0].exceptionResponse.errorMessage;
          this.grocerypricedata = [];
          this.config = {
            itemsPerPage: 10,
            currentPage: 1,
            totalItems: 0
          };
        });
      } else {
        this.groceryservice.getItemNameByMaxPrice().subscribe((res) => {
          this.grocerypricedata = res;
          console.log(this.grocerypricedata );
          this.config = {
            itemsPerPage: 10,
            currentPage: 1,
            totalItems: this.grocerypricedata.length
          };
           });
          
      }
    } 
  
    getItemDetails(itemName:any) {
      this.router.navigate(['viewChart',itemName]);
    }
}
