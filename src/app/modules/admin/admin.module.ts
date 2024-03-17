import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';

import { AdminComponent } from './admin.component';

import { AdminRoutingModule } from './admin-routing.module';
import { PendingComponent } from './components/pending/pending.component';
import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { PendingrequestsComponent } from './components/pendingrequests/pendingrequests.component';
import { GuidelistComponent } from './components/guidelist/guidelist.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { PackageslistComponent } from './components/packageslist/packageslist.component';



@NgModule({
  declarations: [

    AdminhomeComponent,
    AdminComponent,
    PendingComponent,
    AdminpageComponent,
    PendingrequestsComponent,
    GuidelistComponent,
    UserlistComponent,
    PackageslistComponent
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
   
  ]
})
export class AdminModule { }
