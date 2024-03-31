import {  NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { GuideloginComponent } from './components/guidelogin/guidelogin.component';
import { GuidesignupComponent } from './components/guidesignup/guidesignup.component';
import { GuidehomeComponent } from './components/guidehome/guidehome.component';
import { CommonModule } from '@angular/common';
import { GuideComponent } from './guide.component';
import { GuideprofileComponent } from './components/guideprofile/guideprofile.component';
import { AddpackagesComponent } from './components/addpackages/addpackages.component';

const routes: Routes = [
  {
    path: '',
    component: GuideComponent,
    children: [
   
      {
        path: 'guidehome/:guideId',
        component: GuidehomeComponent,
      },
      {
        path:'guideprofileupdate/:guideid',
        component:GuideprofileComponent
      },
      {
        path:'addpackage',
        component:AddpackagesComponent
      }
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuideRoutingModule {}
