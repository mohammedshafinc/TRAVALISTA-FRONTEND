import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/signup.service';
import { UserDAtaService } from 'src/app/services/userData.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss'],
})
export class UserprofileComponent implements OnInit {
  constructor(
    private signupservice: SignupService,
    private router: Router,
    private fb: FormBuilder,
    private userdata:UserDAtaService
  ) {}
  userUpdate!: FormGroup;
  details: any = {};
 

  isImage: boolean = false;

  cancel() {
    this.router.navigateByUrl('/user');
  }

  ngOnInit(): void {
   
    this.userUpdate = this.fb.group({
      fullname: ['',[]],
      email: ['',[]],
      mobile: ['',[]],
      about: ['',[]],
      street: ['',[]],
      city: ['',[]],
      state: ['',[]],
      pincode: ['',[]],
    });

    this.signupservice.getuser().subscribe({
      next: (data) => {
        if(data.expiry){
          alert('session expired please login')
          console.log(';mflsdjfklkdfklgf');
          this.userdata.isLogout()
          
        }
        this.userUpdate.patchValue(data)
        console.log('data in profile', data);
        this.details = data;
        // console.log(this.details.mobile);
    
     
        // console.log(this.details.fullname);
      },
      error: (error) => {
        console.log('error in userprofile', error);
      },
    });

    
  }
  get f() {
    return this.userUpdate.controls;
  }

  onSubmit(_id:any) {

    
    const formValue = this.userUpdate.value
    console.log('Form Value:', formValue);
    this.signupservice.userupdate(formValue).subscribe({
      next:(data)=>{
        
          console.log('haaaaai');
          
          
         
        
        console.log('data', data);

        
      },
      error:(error)=>{
        console.log(error);
        
      }
    })


  }

 
}
