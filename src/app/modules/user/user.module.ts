import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserhomeComponent } from './components/userhome/userhome.component';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user.component';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UserhomeComponent, UserComponent],
  imports: [CommonModule, RouterModule, UserRoutingModule, SharedModule],
})
export class UserModule {}
