import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  HttpInterceptor,
} from '@angular/common/http';
import { OtpVerificationDialogComponentComponent } from './components/signup/otp-verification-dialog-component/otp-verification-dialog-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';

import { NotfoundComponent } from './notfound/notfound.component';
import { CommonInterceptor } from './common.interceptor';
import { SharedModule } from './modules/shared/shared.module';
import { GuideModule } from './modules/guide/guide.module';

import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { UserRoutingModule } from './modules/user/user-routing.module';
import { BannerComponent } from './components/banner/banner.component';
import { ShowpackagedetailsComponent } from './components/show-package-details/showpackagedetails.component';
import { PopularGuidesComponent } from './components/popular-guides/popular-guides.component';
import { PopularPackagesComponent } from './components/popular-packages/popular-packages.component';
import { CarouselModule } from 'primeng/carousel';
import { MatSnackBarModule } from '@angular/material/snack-bar'



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    OtpVerificationDialogComponentComponent,
    LoginComponent,
    NotfoundComponent,
    AboutusComponent,
    ContactUsComponent,
    BannerComponent,
    ShowpackagedetailsComponent,
    PopularGuidesComponent,
    PopularPackagesComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    MatDialogModule,
    FormsModule,
    SharedModule,
    GuideModule,
    UserRoutingModule,
    MatSnackBarModule
    
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: HTTP_INTERCEPTORS, useClass: CommonInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
