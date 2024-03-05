import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user.component';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ UserComponent,UserprofileComponent],
  imports: [CommonModule, SharedModule,UserRoutingModule, FormsModule, ReactiveFormsModule],
})
export class UserModule {}
