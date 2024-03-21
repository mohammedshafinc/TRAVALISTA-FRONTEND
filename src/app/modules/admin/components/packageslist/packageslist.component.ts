import { Component, OnInit } from '@angular/core';
import { GuideService } from 'src/app/services/guide.service';

@Component({
  selector: 'app-packageslist',
  templateUrl: './packageslist.component.html',
  styleUrls: ['./packageslist.component.scss']
})
export class PackageslistComponent implements OnInit{
  packages:any[] = []

  constructor( private guideService:GuideService){}
  ngOnInit(): void {
      
    this.guideService.guideGetPackage(null).subscribe({
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
