import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuideService } from 'src/app/services/guide.service';

@Component({
  selector: 'app-guidegeader',
  templateUrl: './guidegeader.component.html',
  styleUrls: ['./guidegeader.component.scss']
})
export class GuidegeaderComponent implements OnInit{

  guidename:any;
userDetails:any

  constructor( private router:Router, private guideserv:GuideService){}

  ngOnInit(): void {
      this.guideserv.guideprofile().subscribe({
        next:(data)=>{
          console.log('data in header', data);
          this.guidename = data.fullname
         console.log(this.guidename);
         
          
        },
        error:(error)=>{
          console.log(error );
          
        }
      })
  }


  logout(){
    localStorage.removeItem('token')
    this.userDetails = null
    this.router.navigateByUrl('/guide/guidelogin')
  } 

  userProfile(){
this.router.navigateByUrl('/guide/guideprofileupdate')
  }

}
