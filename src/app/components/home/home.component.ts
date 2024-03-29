import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

import { UserDAtaService } from 'src/app/services/userData.service';
import { ShowpackagedetailsComponent } from '../show-package-details/showpackagedetails.component';
import { GuideService } from 'src/app/services/guide.service';
import { Guide } from 'src/app/model/guide';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  userdetails = '';
  packages:any[]=[]

  constructor(
    private router: Router,
    private userData: UserDAtaService,
    private activatedroute: ActivatedRoute,
    private guideservice:GuideService
    // private dialog :MatDialog
  ) {}

  ngOnInit(): void {
    this.activatedroute.fragment.subscribe((data) => {
      // console.log(data);
      this.JumpToSection(data)
    });

    this.guideservice.guideGetPackage(null).subscribe({
      next:(data)=>{
        console.log(data);
        this.packages = data.packages.slice(0, 3)
        console.log(this.packages);
        
        
      },
      error:(error)=>{
        console.log(error)
      }
    })

    // this.userData.sharedData$.subscribe((data) => {
    //   this.userdetails = data;
    //   console.log('from home', data);
    // });
  }
 

  JumpToSection(section:any){
    document.getElementById(section)?.scrollIntoView({behavior:'smooth'})
  }




  
}
