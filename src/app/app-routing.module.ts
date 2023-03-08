import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CameraComponent } from './product/camera/camera.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { ProductComponent } from './product/product.component';
import { WatchComponent } from './product/watch/watch.component';
import { BatComponent } from './sports-equipment/bat/bat.component';
import { CycleComponent } from './sports-equipment/cycle/cycle.component';
import { DumbbellComponent } from './sports-equipment/dumbbell/dumbbell.component';
import { SportsEquipmentComponent } from './sports-equipment/sports-equipment.component';
import { TreadmillComponent } from './sports-equipment/treadmill/treadmill.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutusComponent },
  { path: 'contact-us', component: ContactusComponent },
  {
    path: 'product',
    children: [
      { path: '', component: ProductComponent },
      { path: 'laptop', component: LaptopComponent },
      { path: 'mobile', component: MobileComponent },
      { path: 'camera', component: CameraComponent },
      { path: 'watch', component: WatchComponent },
    ]
  },
  {
    path: 'sports-equipment',
    children: [
      { path: '', component: SportsEquipmentComponent },
      { path: 'bat', component: BatComponent },
      { path: 'cycle', component: CycleComponent },
      { path: 'dumbbell', component: DumbbellComponent },
      { path: 'treadmill', component: TreadmillComponent },
    ]
  },



  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
