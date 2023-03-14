import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminlistComponent } from '../adminlist/adminlist.component';


const adminRoutes : Routes = [
  { path : '', component : AdminlistComponent}
]

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
