import { Component, OnInit } from '@angular/core';
import { GuideService } from 'src/app/services/guide.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent  implements OnInit{
  packages:any[] = []

  constructor( private guideService:GuideService){}
  ngOnInit(): void {
      
    this.guideService.guideGetPackage().subscribe({
      next:(data)=>{
        console.log(data);
        for( const packages of data.packages){
          this.packages.push(packages);
          console.log(packages.packageName);
          console.log(packages.files);
          
        }
        
        
        
      },
      error:(error)=>{
        console.log(error);
        
      }
    })

  }

}
