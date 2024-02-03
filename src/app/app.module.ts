import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { GuidesignupComponent } from './components/guidesignup/guidesignup.component';
import { OtpVerificationDialogComponentComponent } from './components/signup/otp-verification-dialog-component/otp-verification-dialog-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    GuidesignupComponent,
    OtpVerificationDialogComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [{provide:MatDialogRef,useValue:{}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
