import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from 'src/app/components/home/home.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ UserComponent,UserprofileComponent],
  imports: [CommonModule, SharedModule,UserRoutingModule, FormsModule, ReactiveFormsModule],
})
export class UserModule {}
