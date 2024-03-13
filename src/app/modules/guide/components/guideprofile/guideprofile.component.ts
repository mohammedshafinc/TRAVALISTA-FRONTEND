import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GuideService } from 'src/app/services/guide.service';
import { GuidedataService } from '../../services/guidedata.service';

@Component({
  selector: 'app-guideprofile',
  templateUrl: './guideprofile.component.html',
  styleUrls: ['./guideprofile.component.scss'],
})
export class GuideprofileComponent implements OnInit {
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private guideservice: GuideService,
    private guidedata:GuidedataService
  ) {}

  isImage: boolean = false;
  guideUpdate!: FormGroup;
  formdata = new FormData();

    guideDetails:any

  cancel() {
    this.router.navigateByUrl('/guide/guidehome');
  }

  ngOnInit(): void {
    this.guideUpdate = this.fb.group({
      fullname: [''],
      email: ['', []],
      phonenumber: ['', []],
      about: ['', []],
      exp: ['', []],
      imgupload: ['', Validators.required],
      location: ['', []],
      street: ['', []],
      city: ['', []],
      state: ['', []],
      pincode: ['', []],
    });

    this.guideservice.guideprofile().subscribe({
      next: (data) => {
        if (data.expiry){
          alert("session expired please login")
          this.guidedata.isLogout()
        }else{
          this.isImage = true
          this.guideDetails = data 
          this.guideUpdate.patchValue(data)
          console.log('data in update', data);
          
        }
      },
    });
  }

  onfileSelected(event:any){
    this.formdata = new FormData
    const file :File = event.target.files[0]
    console.log(file);
    
    this.formdata.append('imgupload',event.target.files[0])
  }

  onSubmit(id:any){
    
    const formvalue = this.guideUpdate.value
    // const newformdata = {...formvalue,id}
    // console.log(newformdata);
    this.formdata.append('fullname', formvalue.fullname);
    this.formdata.append('email', formvalue.email);
    this.formdata.append('mobilenumber', formvalue.phonenumber);
    this.formdata.append('totalexp', formvalue.exp);
    // this.formdata.append('files', formvalue.imgupload);
    this.formdata.append('location', formvalue.location);
    this.formdata.append('about', formvalue.about);
    this.formdata.append('street', formvalue.street);
    this.formdata.append('city', formvalue.city);
    this.formdata.append('state', formvalue.state);
    this.formdata.append('pincode', formvalue.pincode);
    console.log(formvalue);
    
    
    this.guideservice.guideprofileupdate(this.formdata,id).subscribe({
      next:(data)=>{
        console.log('data updated', data);
      },
      error:(error)=>{
        console.log('error in update', error);
        
      }
    })
    this.formdata = new FormData();
  }
}
