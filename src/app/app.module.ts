import { NgModule } from '@angular/core';
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
import { GuidesignupComponent } from './components/guidesignup/guidesignup.component';
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

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,

    GuidesignupComponent,
    OtpVerificationDialogComponentComponent,
    LoginComponent,
   
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    SharedModule,
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: HTTP_INTERCEPTORS, useClass: CommonInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
