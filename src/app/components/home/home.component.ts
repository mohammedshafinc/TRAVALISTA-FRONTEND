import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

import { UserDAtaService } from 'src/app/services/userData.service';
import { ShowpackagedetailsComponent } from '../show-package-details/showpackagedetails.component';
import { GuideService } from 'src/app/services/guide.service';
import { Guide } from 'src/app/model/guide';
import { AdminService } from 'src/app/modules/admin/services/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  userdetails = '';
  packages: any[] = [];
  guides: any[] = [];

  constructor(
    private router: Router,
    private userData: UserDAtaService,
    private activatedroute: ActivatedRoute,
    private guideservice: GuideService,
    private adminservice: AdminService,
    // private dialog :MatDialog
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.activatedroute.fragment.subscribe((data) => {
      // console.log(data);
      this.JumpToSection(data);
    });

    // get packages
    this.guideservice.guideGetPackage(null).subscribe({
      next: (data) => {
        console.log(data);
        this.packages = data.packages.slice(0, 3);
        console.log(this.packages);
      },
      error: (error) => {
        console.log(error);
      },
    });

    // get guide details
    this.adminservice.getGuides().subscribe({
      next: (data) => {
        console.log(data);
        this.guides = data.guides.slice(0, 4);
        console.log(this.guides);
      },
      error: (error) => {
        console.log(error);
      },
    });

    // this.userData.sharedData$.subscribe((data) => {
    //   this.userdetails = data;
    //   console.log('from home', data);
    // });
  }

  // move to packages
  showPackageDetails(id: any) {
    const token = localStorage.getItem('token');
    console.log(token);

    if (token) {
      console.log(id);

      this.router.navigateByUrl(`/showpackagedetails/${id}`);
      console.log('move to');
    } else {
      this.snackbar.open('please login to complete purchase', 'close', {
        panelClass: ['snackbar-1'],
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      this.router.navigateByUrl('/userlogin');
    }
  }

  JumpToSection(section: any) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }
}
