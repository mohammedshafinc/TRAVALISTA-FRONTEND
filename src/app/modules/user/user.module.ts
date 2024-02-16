import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from 'src/app/components/home/home.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [ UserComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class UserModule {}
