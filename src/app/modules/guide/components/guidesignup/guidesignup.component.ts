import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GuideService } from 'src/app/services/guide.service';

@Component({
  selector: 'app-guidesignup',
  templateUrl: './guidesignup.component.html',
  styleUrls: ['./guidesignup.component.scss']
})
export class GuidesignupComponent  {

    formdata = new FormData()
  
  constructor(private fb:FormBuilder , private guideser:GuideService ){}

  guideRegistrationFrom:FormGroup = this.fb.group({
    fullname: '',
    email:'',
    mobilenumber:'',
    totalexp:'',
    location:'',
    about:''
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
      const cons = this.guideRegistrationFrom.value;
    
   
   this.formdata.append('fullname', cons.fullname)
   this.formdata.append('email', cons.email)
   this.formdata.append('mobilenumber', cons.mobilenumber)
   this.formdata.append('totalexp', cons.totalexp)
   this.formdata.append('files', cons.imgupoad)
   this.formdata.append('location',cons.location)
   this.formdata.append('about', cons.about)
    

      const guideData = this.guideRegistrationFrom.value
  
      this.guideser.guidereg(this.formdata).subscribe({
        next:(data)=>{
          console.log('data recieved from guide' , data);
          
        },
        error:(err)=>{
          console.log('error in getting guide',err);
          
        }
      })
    }catch(err){
      console.log('errin sign guide' , err);
      
    }
    

    
  }
}
