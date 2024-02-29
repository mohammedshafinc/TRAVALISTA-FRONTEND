import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from 'src/app/components/home/home.component';
import { UserheaderComponent } from './components/userheader/userheader.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [ UserComponent, UserheaderComponent, UserprofileComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule,UserRoutingModule],
})
export class UserModule {}
