import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDAtaService } from 'src/app/services/userData.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit{
  constructor(private router: Router, private userdata: UserDAtaService) {}


  userDetails:any

  redirectToRegister() {
    this.router.navigateByUrl('/userregistration');
  }
  redirectToLogin() {
    this.router.navigateByUrl('/userlogin');
  }

  ngOnInit(): void {

    this.userdata.sharedData.subscribe((data) => {
      if (data ) {
        this.userDetails = data.user;
        console.log('userDetails from header', this.userDetails);
      } else {
        console.log('No user data available.');
      }
    });
  }
}
