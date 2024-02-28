import {  NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { GuideloginComponent } from './components/guidelogin/guidelogin.component';
import { GuidesignupComponent } from './components/guidesignup/guidesignup.component';
import { GuidehomeComponent } from './components/guidehome/guidehome.component';
import { CommonModule } from '@angular/common';
import { GuideComponent } from './guide.component';

const routes: Routes = [
  {
    path: '',
    component: GuideComponent,
    children: [
      {
        path: 'guideregister',
        component: GuidesignupComponent,
      },
      {
        path: 'guidelogin',
        component: GuideloginComponent,
      },
      {
        path: 'guidehome',
        component: GuidehomeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuideRoutingModule {}
