import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuideComponent } from './guide.component';
import { RouterModule } from '@angular/router';
import { GuideloginComponent } from './components/guidelogin/guidelogin.component';
import { GuidesignupComponent } from './components/guidesignup/guidesignup.component';
import { GuideRoutingModule } from './guide-routing.module';
import { SharedModule } from '../shared/shared.module';
import { GuidehomeComponent } from './components/guidehome/guidehome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GuideotpComponent } from './components/guideotp/guideotp.component';
import { GuidegeaderComponent } from './components/guidegeader/guidegeader.component';
import { PackagesComponent } from './components/packages/packages.component';
import { AddpackagesComponent } from './components/addpackages/addpackages.component';
import { GuideprofileComponent } from './components/guideprofile/guideprofile.component';





@NgModule({
  declarations: [
    GuideComponent,
    GuideloginComponent,
    GuidesignupComponent,
    GuidehomeComponent,
    GuideotpComponent,
    GuidegeaderComponent,
    // PackagesComponent,
    AddpackagesComponent,
    GuideprofileComponent
  ],
  imports: [
    CommonModule,
    GuideRoutingModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  exports: [
  //  PackagesComponent
  ]

})
export class GuideModule { }
