import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { SignupService } from 'src/app/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  selectedImg: any = null;
  submit = false
  fileSize = 0;

  constructor(private fb:FormBuilder ,private http:HttpClient , private signupserv:SignupService){}

  registrationForm = this.fb.group({
    fullName:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
  
    mobileNumber:['',[Validators.required,Validators.pattern('[0-9]{10}')]],
   
    password:['',[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[$@^!%*?&])(?=.*[0-7]).{8,}$"),Validators.minLength(8)]],
    confirmPassword: ['']
  })

//   confirmPasswordValidator(control: AbstractControl): ValidationErrors | null {
//     const password = control.get('password');
//     const confirmPassword = control.get('confirmPassword');

//     if (password && confirmPassword && password.value !== confirmPassword.value) {
//         return { 'passwordMismatch': true };
//     }

//     return null;
// }

  formData = new FormData();

  
  

  // async validateImage(control:AbstractControl):Promise<{[key:string]:any}| null>{
  //   const file = control.value
  //   if(file){
  //     const fileType = file.type;
  //     const allowedTypes = ['image/jpg','image/jpeg','image/png']
  //     if(!allowedTypes.includes(fileType)){
  //       return {invalidImageType:true}
  //     }
  //     const fileSize = file.size;
  //     const maxSize = 500*1024;
  //     if(fileSize > maxSize){
  //       return {invalidFileSize:true}
  //     }
  //   }
  //   return null
  // }

  get f(){
    return this.registrationForm.controls
  }

  // get getFileSize() {
  //   if(this.fileSize > 500) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  onsubmit(){
    // console.log('clicked');
    this.submit = true
   const formvalues =  this.registrationForm.value
   console.log(formvalues);

   
  this.signupserv.apiCall(formvalues).subscribe({
    next:(data)=>{
      console.log("response from server" , data)
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
   

    
    
  }

//   onFileSelected(event: any) {
    
//       const file = event.target.files[0];
//       if (file) {
//         const fileSizeInKb = file.size / 1024;
//         this.fileSize = fileSizeInKb;
    
//         const reader = new FileReader();
//         reader.onload = (readerEvent: any) => {
//           this.selectedImg = readerEvent.target.result;
//         };
//         reader.readAsDataURL(file);
    
//         this.formData.append('file', file);
       

      
//     }

//     this.submit = false
//   }
}
