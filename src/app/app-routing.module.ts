import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroceryComponent } from './grocery/grocery.component';
import { GrocerychartComponent } from './grocerychart/grocerychart.component';
const routes: Routes = [{path: '',component:GroceryComponent},{path:'viewChart/:itemName',component:GrocerychartComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
