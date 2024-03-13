import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GuideService } from 'src/app/services/guide.service';

@Component({
  selector: 'app-addpackages',
  templateUrl: './addpackages.component.html',
  styleUrls: ['./addpackages.component.scss'],
})
export class AddpackagesComponent implements OnInit {
  addpackage!: FormGroup;
  showActivities: boolean = false;
  values: any[] = Array.from({ length: 10 }, (x, i) => i + 1);
  activityDay: any[] = Array.from({ length: 10 }, ( x,i) => i + 1);
  imgsrc!:String
  formdata = new FormData()

  constructor(private fb: FormBuilder, private guideservice:GuideService, private router: Router) {}

  ngOnInit(): void {
    this.addpackage = this.fb.group({
      packageName: ['', Validators.required],
      description: ['', Validators.required],
      amount: ['', Validators.required],
      food: [false],
      accomodation: [false],
      activities: [false],
      transpotation: [false],
      activityCount: [false],
      duration: [false],
    });
   
  }
  get f() {
    return this.addpackage.controls;
  }

  redirectToGuideHome(){
    this.router.navigateByUrl('/guide/guidehome')
  }

  onsubmit() {
   const  packageData = this.addpackage.value
   packageData.activityCount = Number(packageData.activityCount)
   packageData.duration = Number(packageData.duration)
    console.log(this.addpackage.value);

    this.formdata.append('packageName',packageData.packageName)
    this.formdata.append('description',packageData.description)
    this.formdata.append('amount',packageData.amount)
    this.formdata.append('food',packageData.food)
    this.formdata.append('accomodation',packageData.accomodation)
    this.formdata.append('activities',packageData.activities)
    this.formdata.append('activityCount',packageData.activityCount)
    this.formdata.append('duration',packageData.duration)

    this.guideservice.guidepackagedd(this.formdata).subscribe({
      next:(data)=>{
        console.log('message from server',data);
        setTimeout(() => {
          
          this.redirectToGuideHome()
        }, 1000);
      },
      error:(error) =>{
        console.log('error getting data from server', error);
        
      }
    })
  }
  toggleActivities(): void {
    this.showActivities = !this.showActivities;
  }
  showimg(e:any): void {
   if(e.target.files){
    const file = e.target.files[0]
    console.log(URL.createObjectURL(file))
    this.imgsrc = URL.createObjectURL(file)
   }
      this.formdata = new FormData
    const file :File = e.target.files[0]
    console.log(file);
    
    this.formdata.append('imgupload',e.target.files[0])

  }
}
