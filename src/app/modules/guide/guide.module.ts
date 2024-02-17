import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuideComponent } from './guide.component';
import { RouterModule } from '@angular/router';
import { GuideloginComponent } from './components/guidelogin/guidelogin.component';
import { GuidesignupComponent } from './components/guidesignup/guidesignup.component';
import { GuideRoutingModule } from './guide-routing.module';
import { SharedModule } from '../shared/shared.module';
import { GuidehomeComponent } from './components/guidehome/guidehome.component';




@NgModule({
  declarations: [
    GuideComponent,
    GuideloginComponent,
    GuidesignupComponent,
    GuidehomeComponent
  ],
  imports: [
    CommonModule,
    GuideRoutingModule,
    SharedModule,
    RouterModule
  ],

})
export class GuideModule { }
