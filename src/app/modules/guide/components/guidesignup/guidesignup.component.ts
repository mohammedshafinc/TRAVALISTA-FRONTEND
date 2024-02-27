import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GuideService } from 'src/app/services/guide.service';

@Component({
  selector: 'app-guidesignup',
  templateUrl: './guidesignup.component.html',
  styleUrls: ['./guidesignup.component.scss']
})
export class GuidesignupComponent  {
  submit = false
  errmsg = ''

    formdata = new FormData()
  
  constructor(private fb:FormBuilder , private guideser:GuideService ){}

  guideRegistrationFrom:FormGroup = this.fb.group({
    fullname: ['', Validators.required],
    email:['',  [Validators.required,Validators.email]],
    mobilenumber:['',[Validators.required,Validators.pattern('[0-9]{10}')]],
    totalexp:['',Validators.required],
    imgupload:['',Validators.required],
    location:['',Validators.required],
    about:['',Validators.required],
    password:['',[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[$@^!%*?&])(?=.*[0-7]).{8,}$'),Validators.minLength(8)]],
    confirmpassword:['']
  })

  get f(){
   return  this.guideRegistrationFrom.controls
  }
  onFileSelected(event: any) {
    this.formdata = new FormData
    const file: File = event.target.files[0];
    this.formdata.append('files',file)

  }


  onsubmit(){
    try{
      this.submit = true
      const cons = this.guideRegistrationFrom.value;
    
   
   this.formdata.append('fullname', cons.fullname)
   this.formdata.append('email', cons.email)
   this.formdata.append('mobilenumber', cons.mobilenumber)
   this.formdata.append('totalexp', cons.totalexp)
   this.formdata.append('files', cons.imgupoad)
   this.formdata.append('location',cons.location)
   this.formdata.append('about', cons.about)
   this.formdata.append('password', cons.password)
    

      const guideData = this.guideRegistrationFrom.value
  
      this.guideser.guidereg(this.formdata).subscribe({
        next:(data)=>{
          console.log('data recieved from guide' , data);
          
        },
        error:(err)=>{
          console.log('error in getting guide',err);
          this.errmsg = err.error.message
          console.log('error in getting guide',err.error.message);
          
        }
      })
    }catch(err){
      console.log('errin sign guide' , err);
      
    }
    

    this.formdata = new FormData
  }
}
