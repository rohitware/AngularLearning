import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { AdminRoutingModule } from './admin/admin-routing.module';


@NgModule({
  declarations: [AdminlistComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { 
  constructor(){
    console.log('AdminModule called');
    
  }
}
