import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserDAtaService } from 'src/app/services/userData.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  userdetails=''

  constructor( private router:Router , private userData:UserDAtaService){


  }

  

  ngOnInit(): void {
    this.userData.sharedData$.subscribe((data) => {
      this.userdetails = data;
      console.log('from home', data);
    });
  }
 
}
