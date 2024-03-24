import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/components/home/home.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { UserComponent } from './user.component';
import { BookedPackagesComponent } from './components/booked-packages/booked-packages.component';

const routes: Routes = [
  {
    path:'',
    component:UserComponent,
    children:[
      {
        path:'',
        component:HomeComponent

      },
      {
        path:'usrprofileupdate',
        component:UserprofileComponent
      },
      {
        path: 'bookedpackages',
        component:BookedPackagesComponent
      },
    ]
  }
];

@NgModule({
    declarations:[],
    imports:[
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class UserRoutingModule {}
