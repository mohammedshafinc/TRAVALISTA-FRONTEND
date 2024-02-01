import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-guidesignup',
  templateUrl: './guidesignup.component.html',
  styleUrls: ['./guidesignup.component.scss']
})
export class GuidesignupComponent {
  selectedImg: any = null;
  submit = false
  fileSize = 0;

  constructor(private fb:FormBuilder ,private http:HttpClient){}

  registrationForm = this.fb.group({
    fullName:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    passportNumber:['',[Validators.required,Validators.pattern('[0-9]{14}')]],
    mobileNumber:['',[Validators.required,Validators.pattern('[0-9]{10}')]],
    country:['',Validators.required],
    state:['',Validators.required],
    district:['',Validators.required],
    image:['',[Validators.required,this.validateImage]],
    password:['',[Validators.required,Validators.pattern("(^[A-Za-z0-9@!#$%^&*()_+{}\[\]:;<>,.?/~`-]{8,}$)"),Validators.minLength(8)]],
    confirmPassword:['']
  })

  formData = new FormData();

  
  

  async validateImage(control:AbstractControl):Promise<{[key:string]:any}| null>{
    const file = control.value
    if(file){
      const fileType = file.type;
      const allowedTypes = ['image/jpg','image/jpeg','image/png']
      if(!allowedTypes.includes(fileType)){
        return {invalidImageType:true}
      }
      const fileSize = file.size;
      const maxSize = 500*1024;
      if(fileSize > maxSize){
        return {invalidFileSize:true}
      }
    }
    return null
  }

  get f(){
    return this.registrationForm.controls
  }

  get getFileSize() {
    if(this.fileSize > 500) {
      return true;
    } else {
      return false;
    }
  }

  onsubmit(){
    // console.log('clicked');
    this.submit = true
   const formvalues =  this.registrationForm.value
   console.log(formvalues);

   const headers = new HttpHeaders({'Content-Type':'multipart/form-data'})
  //  this.http.post('')
   

    
    
  }

  onFileSelected(event: any) {
    
      const file = event.target.files[0];
      if (file) {
        const fileSizeInKb = file.size / 1024;
        this.fileSize = fileSizeInKb;
    
        const reader = new FileReader();
        reader.onload = (readerEvent: any) => {
          this.selectedImg = readerEvent.target.result;
        };
        reader.readAsDataURL(file);
    
        this.formData.append('file', file);
       

      
    }

    this.submit = false
  }
}



