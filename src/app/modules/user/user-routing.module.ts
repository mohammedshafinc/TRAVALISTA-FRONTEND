import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/components/home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
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
