import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GuideService } from 'src/app/services/guide.service';
import { PackageService } from '../../services/package.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserDAtaService } from 'src/app/services/userData.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss'],
})
export class PackagesComponent implements OnInit {
  packages: any[] = [];
  guideId= '';
  packageId!: null;

  constructor(
    private guideService: GuideService,
    private route: ActivatedRoute,
    private router: Router,
    private packageService:PackageService,
    private userdata:UserDAtaService
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((data) => {
      this.getPackages(data.get('guideId'));
      console.log(data.get('guideId'));
    });
  }


  getPackages(guideId: String | null = null) {
    console.log(guideId);

    this.guideService.guideGetPackage(guideId).subscribe({
      next: (data) => {
        console.log(data);
        this.packages = data.packages;
        console.log('id', data.packages);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  showPackageDetails(id: any) {
    const authentication = localStorage.getItem('type');
    console.log(authentication);

    console.log(id);

    this.router.navigateByUrl(`/showpackagedetails/${id}`);
    console.log('move to');
  }

  updatepackage(id: any) {
    this.packageId = id;
    this.router.navigateByUrl(`/guide/updatepackage/${this.packageId}`);
  }
  deletepackage(id: any){
    // console.log(id);
    this.userdata.setData(true)
    this.packageService.deletepackage(id).subscribe({
      next:(data)=>{
        this.userdata.setData(false)
        console.log(data);
        this.route.paramMap.subscribe((data) => {
          const guideId = data.get('guideId');
          this.getPackages(guideId); // Pass guideId to fetch only packages associated with the current guide
        });
    
        
      },
      error:(error)=>{
        this.userdata.setData(false)

        console.log(error);
        
      }
    })
    
  }
}
