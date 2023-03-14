import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerlistComponent } from '../customerlist/customerlist.component';


const customerRoutes : Routes =[
  { path : '', component : CustomerlistComponent}
]

@NgModule({
  imports: [RouterModule.forChild(customerRoutes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
