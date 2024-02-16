import {
  Component,
  Inject,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SignupComponent } from '../signup.component';
import { UserDAtaService } from 'src/app/services/userData.service';
import { SignupService } from 'src/app/services/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp-verification-dialog-component',
  templateUrl: './otp-verification-dialog-component.component.html',
  styleUrls: ['./otp-verification-dialog-component.component.scss'],
})
export class OtpVerificationDialogComponentComponent implements OnInit {
  otp = { one: '', two: '', three: '', four: '' };

  data: any;
  details = ''

  constructor(
    public dialogRef: MatDialogRef<OtpVerificationDialogComponentComponent>,
    private userData: UserDAtaService,
    private signserv: SignupService,
    private router: Router
   
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  // auto-focus
  autoInputChange(event: any) {
    const input = event.target;
    const nextInput = event.target.nextElementSibling;
    if (input.value.length === 1 && nextInput) {
      nextInput.focus();
      // console.log('input changed auto foucs');
    }
  }

  ngOnInit(): void {
    this.userData.sharedData$.subscribe((data) => {
      this.data = data;
      // console.log('from otp', data);
    });
  }

  navigateToUserHome() {
    this.router.navigateByUrl('/user');
  }

  onOtpSubmit() {
    try {
      const otpvalue = `${this.otp.one}${this.otp.two}${this.otp.three}${this.otp.four}`;
      // console.log(otpvalue);
      const splitOtpvalue = { otp: otpvalue, ...this.data };
      // console.log(splitOtpvalue);

      this.signserv.veriftOtp(splitOtpvalue).subscribe({
        next: (data) => {
          console.log('response from verify otp', data);


          this.userData.setData(data)
        const token =   localStorage.setItem('token', data.token);
        console.log('token',token);
        
         
          this.closeDialog();
        
          this.navigateToUserHome();
        },
        error: (err) => {
          console.log('error while verifying Otp', err);
        },
      });
    } catch (error) {
      console.log('error in console', error);
    }
  }
}
