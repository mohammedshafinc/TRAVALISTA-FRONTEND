import { Component, OnInit } from '@angular/core';
import { GuideService } from 'src/app/services/guide.service';
import { SignupService } from 'src/app/services/signup.service';
import { UserDAtaService } from 'src/app/services/userData.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{

  constructor(private userservice:SignupService, private userdata:UserDAtaService){}

  ngOnInit(): void {
      this.userservice.getuser().subscribe({
        next:(data)=>{
          if(data.expiry){
            alert('session expired please login')
            this.userdata.isLogout()
          } 
        }
      })
      }

}
