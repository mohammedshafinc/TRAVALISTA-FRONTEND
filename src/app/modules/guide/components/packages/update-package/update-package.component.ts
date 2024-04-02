import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PackageService } from '../../../services/package.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-update-package',
  templateUrl: './update-package.component.html',
  styleUrls: ['./update-package.component.scss'],
})
export class UpdatePackageComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private packageservice: PackageService,
    private activatedroute: ActivatedRoute,
    private router:Router
  ) {}

  packageUpdate!: FormGroup;
  packageId: any;
  formdata = new FormData();
  packagedata: any;
  guideId:any

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((data) => {
      this.packageId = data.get('packageid'), 
      console.log(this.packageId);
    });
    

    this.packageUpdate = this.fb.group({
      packageName: [''],
      amount: [''],
      food: [''],
      imgupload:[''],
      activities: ['', Validators.required],
      activityCount: [],
      duration: [''],
      accomodation: [''],
      description: [''],
    });

    console.log(this.packageUpdate);

    this.packageservice.getSelectedPackage(this.packageId).subscribe({
      next: (data) => {
        console.log(data);
        this.packagedata = data.packages;
        this.guideId = data.packages.guideId

        this.packageUpdate.patchValue(data.packages);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  onfileSelected(event: any) {
    this.formdata = new FormData();
    const file: File = event.target.files[0];
    console.log(file);

    this.formdata.append('imgupload', event.target.files[0]);
    
  }

  navigateToHome(){
    this.router.navigateByUrl(`/guide/guidehome/${this.guideId}`)
  }
  cancel(){
    this.router.navigateByUrl(`/guide/guidehome/${this.guideId}`)
  }

  updatePackage(id: any) {
    const formvalue = this.packageUpdate.value;
    // console.log('id',id);
    this.formdata.append('packageName', formvalue.packageName);
    this.formdata.append('amount', formvalue.amount);
    this.formdata.append('mobilenumber', formvalue.food);
    this.formdata.append('activities', formvalue.activities);
    this.formdata.append('activityCount', formvalue.activityCount);
    this.formdata.append('duration', formvalue.duration);
    this.formdata.append('accomodation', formvalue.accomodation);
    this.formdata.append('description', formvalue.description);

    console.log(this.formdata);

    this.packageservice.packageupdate(this.formdata,id).subscribe({

    next:(data)=>{
      console.log(data)
      this.navigateToHome()
    },
    error:(error)=>{
      console.log(error);
      
    }
    })

    
  }

  
}
