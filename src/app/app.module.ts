import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { EmployeeComponent } from './employee/employee.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { DirectivesAssignComponent } from './directives-assign/directives-assign.component';
import { CustomDirective } from './custom.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TDFComponent } from './tdf/tdf.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TDFAssignComponent } from './tdfassign/tdfassign.component';
import { ReactiveAssignComponent } from './reactive-assign/reactive-assign.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ReactiveFormAssignComponent } from './reactive-form-assign/reactive-form-assign.component';
import { HttpClientModule } from '@angular/common/http';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { CustomPipe } from './custom.pipe';
import { SearchPipe } from './search.pipe';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { SportsEquipmentComponent } from './sports-equipment/sports-equipment.component';
import { CycleComponent } from './sports-equipment/cycle/cycle.component';
import { BatComponent } from './sports-equipment/bat/bat.component';
import { DumbbellComponent } from './sports-equipment/dumbbell/dumbbell.component';
import { TreadmillComponent } from './sports-equipment/treadmill/treadmill.component';
import { DemopostComponent } from './demopost/demopost.component';
import { DemopostdetailsComponent } from './demopostdetails/demopostdetails.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ProductModule } from './product/product.module';
import { UserDataComponent } from './user-data/user-data.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Test1Component,
    Test2Component,
    CardComponent,
    EmployeeComponent,
    NgforComponent,
    NgifComponent,
    NgswitchComponent,
    NgstyleComponent,
    NgclassComponent,
    DirectivesAssignComponent,
    CustomDirective,
    TDFComponent,
    TemplateformComponent,
    ReactiveformComponent,
    TDFAssignComponent,
    ReactiveAssignComponent,
    ReactiveFormAssignComponent,
    PipeExampleComponent,
    CustomPipe,
    SearchPipe,
    ProductFilterComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    AboutusComponent,
    ContactusComponent,
    HomeComponent,
    PageNotFoundComponent,
    
    SportsEquipmentComponent,
    CycleComponent,
    BatComponent,
    DumbbellComponent,
    TreadmillComponent,
    DemopostComponent,
    DemopostdetailsComponent,
    UserComponent,
    UserDetailsComponent,
    UserDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatStepperModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    HttpClientModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
