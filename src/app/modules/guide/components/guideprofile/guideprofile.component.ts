import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  onSubmit(id:any){
    
    const formvalue = this.guideUpdate.value
    // const newformdata = {...formvalue,id}
    // console.log(newformdata);
    
    this.guideservice.guideprofileupdate(formvalue,id).subscribe({
      next:(data)=>{
        console.log('data updated', data);

        
      }
    })
  }
}
