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
    this.router.navigateByUrl('guidelogin');
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
          this.guideDetails = data 
          this.guideUpdate.patchValue(data)
          console.log('data in update', data);
        }
      },
    });
  }

  onSubmit(){
    const formvalue = this.guideUpdate.value
    this.guideservice.guideprofileupdate(formvalue).subscribe({
      next:(data)=>{
        console.log('data updated', data);
        
      }
    })
  }
}
