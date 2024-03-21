import { Component, OnInit } from '@angular/core';
import { GuideService } from 'src/app/services/guide.service';
import { GuidedataService } from '../../services/guidedata.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-guidehome',
  templateUrl: './guidehome.component.html',
  styleUrls: ['./guidehome.component.scss']
})
export class GuidehomeComponent implements OnInit{
  constructor(private guideserviice : GuideService , private guidedata:GuidedataService , private route: ActivatedRoute){}
  packages = '';
  errorMsg = ''

ngOnInit(): void {



  console.log('guidehmome');
  
    this.guideserviice.guideprofile().subscribe({
      next:(data)=>{
        if (data.expiry){
          alert('session expired please login')
          this.guidedata.isLogout()
        }
       
        console.log('profile data of guide', data);   
         
      },
      error:(error)=>{
        console.log('error getting profile from server', error);
      }
    })

   
}

}
