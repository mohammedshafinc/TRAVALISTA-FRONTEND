import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  selectedImg: any = null;
  submit = false

  constructor(private fb:FormBuilder){}

  registrationForm = this.fb.group({
    fullName:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    passportNumber:[''],
    mobileNumber:['',[Validators.required,Validators.pattern('[0-9]{10}')]],
    country:[''],
    state:[''],
    district:[''],
    image:[''],
    password:[''],
    confirmPassword:['']
  })

  get f(){
    return this.registrationForm.controls
  }

  onsubmit(){
    // console.log('clicked');
    this.submit = true
    
  }

  onFileSelected(event: any) {
    this.selectedImg = event.target.files[0];

    const reader = new FileReader();

    reader.onload = (readerEvent: any) => {
      this.selectedImg = readerEvent.target.result;
    };

    reader.readAsDataURL(this.selectedImg);
  }
}
