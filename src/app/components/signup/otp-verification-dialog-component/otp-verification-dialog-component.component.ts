import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SignupComponent } from '../signup.component';

@Component({
  selector: 'app-otp-verification-dialog-component',
  templateUrl: './otp-verification-dialog-component.component.html',
  styleUrls: ['./otp-verification-dialog-component.component.scss'],
})
export class OtpVerificationDialogComponentComponent implements OnInit{
  
  constructor(public dialogRef: MatDialogRef<SignupComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
      console.log(";fmfg",this.data);
      
  }
  
}
