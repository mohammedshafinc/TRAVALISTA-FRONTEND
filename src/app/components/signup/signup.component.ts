import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { SignupService } from 'src/app/services/signup.service';
import { OtpVerificationDialogComponentComponent } from './otp-verification-dialog-component/otp-verification-dialog-component.component';
import { MatDialog } from '@angular/material/dialog';
import { UserDAtaService } from 'src/app/services/userData.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  variable = 'string';
  submit = false;
  errmsg = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private signupserv: SignupService,
    private dialog: MatDialog,
    private userData: UserDAtaService
  ) {}

  registrationForm = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],

    mobileNumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],

    password: [
      '',
      [
        Validators.required,
        Validators.pattern(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*[$@^!%*?&])(?=.*[0-7]).{8,}$'
        ),
        Validators.minLength(8),
      ],
    ],
    confirmPassword: [''],
  });

  openDialog() {
    setTimeout(() => {
      const dialogRef = this.dialog.open(
        OtpVerificationDialogComponentComponent,
        {
          width: '400px',
        }
      );

      dialogRef.afterClosed().subscribe((result) => {
        console.log('dialog was closed');
      });
    }, 1000);
  }

  formData = new FormData();

  get f() {
    return this.registrationForm.controls;
  }

  onsubmit() {
    this.submit = true;
    const formvalues = this.registrationForm.value;
    console.log(formvalues);

    this.signupserv.apiCall(formvalues).subscribe({
      next: (data) => {
        console.log('response from server', data);
        this.openDialog();
        console.log('open dialog called');
      },
      error: (err) => {
        this.errmsg = err.error.message;
        console.log(err);
        console.log('open dialog prevent');

        console.log('messge error', this.errmsg);
        console.log('main error', err);
      },
    });
    this.userData.setData(this.registrationForm.value);
  }
}
