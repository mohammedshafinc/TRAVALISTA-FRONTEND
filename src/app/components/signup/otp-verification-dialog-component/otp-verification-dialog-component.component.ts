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
import { UserDAtaService } from 'src/app/userData.service';

@Component({
  selector: 'app-otp-verification-dialog-component',
  templateUrl: './otp-verification-dialog-component.component.html',
  styleUrls: ['./otp-verification-dialog-component.component.scss'],
})
export class OtpVerificationDialogComponentComponent implements OnInit {

  data: any;

  constructor(
    public dialogRef: MatDialogRef<OtpVerificationDialogComponentComponent>,
    private userData:UserDAtaService
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
   this.userData.sharedData.subscribe(data =>{
    this.data = data
    console.log("from otp",data);
    
   })
  }
}