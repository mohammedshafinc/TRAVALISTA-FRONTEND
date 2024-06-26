import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuideService } from 'src/app/services/guide.service';

@Component({
  selector: 'app-guidegeader',
  templateUrl: './guidegeader.component.html',
  styleUrls: ['./guidegeader.component.scss'],
})
export class GuidegeaderComponent implements OnInit {
  guidename: any;
  userDetails: any;
  isImage: boolean = false;
  guideid!:any
  constructor(private router: Router, private guideserv: GuideService) {}

  ngOnInit(): void {
    this.guideserv.guideprofile().subscribe({
      next: (data) => {
        console.log('data in header', data);
        this.userDetails = data
        this.guideid = data._id
        console.log(this.guideid);
        
        this.guidename = data.fullname;
        console.log(this.guidename);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  redirectToPackage(){
    this.router.navigateByUrl('/guide/addpackage')
  }

   logout() {
    localStorage.clear()
    this.userDetails = null;
    this.router.navigateByUrl('/guidelogin');
  }

  userProfile() {
    this.router.navigateByUrl(`/guide/guideprofileupdate/${this.guideid}`);
  }
}
