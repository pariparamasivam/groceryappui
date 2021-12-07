import { Component, OnInit , Directive, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GroceryserviceService } from '../service/groceryservice.service';
import { GroceryPriceDataResponse } from '../grocery-price-data-response';
import { Color, Label } from 'ng2-charts';
import { formatDate } from '@angular/common';
import {Chart} from 'chart.js';
import {Location} from '@angular/common';


@Component({
  selector: 'app-grocerychart',
  templateUrl: './grocerychart.component.html',
  styleUrls: ['./grocerychart.component.css']
})
export class GrocerychartComponent implements OnInit {
  grocerypricedata: GroceryPriceDataResponse[] = [];
  
  chartLabels: Label[] = [];
  data :any=[];
chartVal :any= {};
 linecharval :any 
  chartColors: Color[] = [
    {
      borderColor: 'red',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
    {
      borderColor: 'green',
      backgroundColor: 'rgba(20,255,0,0.3)',
    },
  ];

    
  price :number[] = [];  
  dateadded :string[]= [];  
 LineChar: any
 itemName = '';
 param : string = '';
  constructor(private location: Location,private activedRoute:ActivatedRoute,private router : Router, private groceryservice:GroceryserviceService) {
    this.param  = this.activedRoute.snapshot.paramMap.get('itemName') || '';
   }
  
  ngOnInit(): void {
    
    this.groceryservice.getGroceryByItemNameSorted(this.param).subscribe((res:GroceryPriceDataResponse[]) => {
      res.forEach(x => {  
       this.price.push(x.price) ;
       this.dateadded.push(x.dateadded);
       this.itemName = x.itemName;
      });  
      
      var ctx = 'myChart';
      this.LineChar = new Chart(ctx, {  
        type: 'line',  
        data: {  
          labels: this.dateadded,  

          datasets: [  
            {  
              data: this.price,  
              borderColor: '#3cb371',  
              fill : false,
              //backgroundColor: 'rgba(20,255,0,0.3)',
              label:this.itemName
            }  
          ]  
        },  
        options: {  
          legend: {  
            display: true
          },  
          scales: {  
            xAxes: [{  
              display: true  
            }],  
            yAxes: [{  
              display: true  
            }]
          }  
        }  
      });  
      
    });  
    
  }

  
  chartData :any= [];
  
  chartOptions = {
    responsive: true,
  };
  
  chartLegend = true;
  chartPlugins = [];
  loadHomePage() {
    this.location.back();
  }
}
