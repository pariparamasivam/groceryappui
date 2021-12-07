import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GroceryPriceDataResponse } from '../grocery-price-data-response';

@Injectable({
  providedIn: 'root'
})
export class GroceryserviceService {

  constructor( private http:HttpClient ) {}

  private groceryMaxPriceSortedURL = 'http://localhost:8080/groceryapp/v1/api/getGroceryItemByMaxPrice';
  private groceryMaxPriceByItemNameContainsSortedURL = 'http://localhost:8080/groceryapp/v1/api/getAllGroceryItemsByNameContains';
  private groceryMaxPriceByItemNameSortedURL = 'http://localhost:8080/groceryapp/v1/api/getAllGroceryItemsSortByName';
    
  getItemNameByMaxPrice(): Observable<GroceryPriceDataResponse[]>{
    return this.http.get<GroceryPriceDataResponse[]>(`${this.groceryMaxPriceSortedURL}`);
  }
  
  getGroceryByItemNameContains(param:string): Observable<GroceryPriceDataResponse[]>{
    const params = new HttpParams().set('itemName', param);
  console.log(params);
    return this.http.get<GroceryPriceDataResponse[]>(`${this.groceryMaxPriceByItemNameContainsSortedURL}`,{params});
  }
  getGroceryByItemNameSorted(param:string): Observable<GroceryPriceDataResponse[]>{
    const params = new HttpParams().set('itemName', param);
  console.log(params);
    return this.http.get<GroceryPriceDataResponse[]>(`${this.groceryMaxPriceByItemNameSortedURL}`,{params});
  }
  
}
