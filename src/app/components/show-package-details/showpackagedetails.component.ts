import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PackageService } from 'src/app/modules/guide/services/package.service';

@Component({
  selector: 'app-showpackagedetails',
  templateUrl: './showpackagedetails.component.html',
  styleUrls: ['./showpackagedetails.component.scss']
})
export class ShowpackagedetailsComponent implements OnInit{
  packageId:String | null = null

  constructor( private actRoute:ActivatedRoute , private packageService:PackageService){}

  ngOnInit(): void {
      this.actRoute.paramMap.subscribe((data)=>{
        // console.log(data.get('packageid'));
        this.packageId = data.get('packageid')
        console.log(this.packageId);

        this.packageService.getPackageshow(this.packageId).subscribe({
          next:(data)=>{
            console.log(data);
            
          },
          error:(error)=>{
            console.log(error);
            
          }
        })
        
        
      })
  }
}
