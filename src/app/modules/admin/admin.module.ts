import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';

import { AdminComponent } from './admin.component';

import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [

    AdminhomeComponent,
    AdminComponent
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
   
  ]
})
export class AdminModule { }
