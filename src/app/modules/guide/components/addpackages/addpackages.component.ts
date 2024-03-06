import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  activityDay: any[] = Array.from({ length: 10 }, (x, i) => i + 1);
  imgsrc!:String

  constructor(private fb: FormBuilder, private guideservice:GuideService) {}

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
    // for(let i=1 ;i<=15;i++){
    //   this.values.push(i)
    // }
  }
  get f() {
    return this.addpackage.controls;
  }

  onsubmit() {
   const  packageData = this.addpackage.value
   packageData.activityCount = Number(packageData.activityCount)
   packageData.duration = Number(packageData.duration)
    console.log(this.addpackage.value);
    this.guideservice.guidepackagedd(packageData).subscribe({
      next:(data)=>{
        console.log('message from server',data);
        
      }
    })
  }
  toggleActivities(): void {
    this.showActivities = !this.showActivities;
  }
  showimg(e:any): void {
   if(e.target.files){
    const file = e.target.files[0]
    // const reader = new FileReader()
    // reader.readAsDataURL(file)
    // reader.onload = (event:any) => {
    //   this.imgsrc = event.target.result;
    // }
    console.log(URL.createObjectURL(file))
    this.imgsrc = URL.createObjectURL(file)
   }
  }
}
