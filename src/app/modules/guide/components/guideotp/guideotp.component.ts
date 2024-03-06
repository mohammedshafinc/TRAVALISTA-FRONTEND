import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GuideService } from 'src/app/services/guide.service';
import { UserDAtaService } from 'src/app/services/userData.service';

@Component({
  selector: 'app-guideotp',
  templateUrl: './guideotp.component.html',
  styleUrls: ['./guideotp.component.scss'],
})
export class GuideotpComponent implements OnInit {
  data: any;
  otp = { one: '', two: '', three: '', four: '' };

  constructor(
    private dialogRef: MatDialogRef<GuideotpComponent>,
    private userdata: UserDAtaService,
    private guideservice: GuideService,
    private router: Router
  ) {}
  closeDialog(): void {
    this.dialogRef.close();
  }

  autoInputChange(event: any) {
    const input = event.target;
    const nextInput = event.target.nextElementSibling;
    if (input.value.length === 1 && nextInput) {
      nextInput.focus();
      // console.log('input changed auto foucs');
    }
  }

  navigateToGuideHome() {

    this.router.navigateByUrl('/guide/guidehome')
  }

  ngOnInit(): void {
    this.userdata.userData3$.subscribe((data) => {
      this.data = data;
      console.log('from guide otp', this.data);
    });
  }

  onOtpSubmit() {
    try {
      const otpvalue = `${this.otp.one}${this.otp.two}${this.otp.three}${this.otp.four}`;
      const sendData = `${this.data.fullname}`
      console.log(sendData);
      
      // console.log(otpvalue);
      // const splitOtpvalue = { otp: otpvalue, ...this.data };

      this.data.append('otp', otpvalue)
      // console.log('nsdnfndsfsdlf', splitOtpvalue);
      this.guideservice.otpverify(this.data).subscribe({
        next: (data) => {
          console.log('data recieved from server', data);
          this.closeDialog();
          localStorage.setItem('token', data.token)
          localStorage.setItem('type',data.type)
          this.navigateToGuideHome()
          console.log('navigated to home');
        },
        error:(err)=>{
          console.log('error in otp' ,err);
          
        }
      });
    } catch (err) {
      console.log(err);
    }
  }
}
