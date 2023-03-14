import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackpacksComponent } from './backpacks/backpacks.component';
import { WalletsComponent } from './wallets/wallets.component';
import { SunglassesComponent } from './sunglasses/sunglasses.component';
import { RouterModule } from '@angular/router';
import { FashionComponent } from './fashion.component';



@NgModule({
  declarations: [BackpacksComponent, WalletsComponent, SunglassesComponent, FashionComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class FashionModule { }
