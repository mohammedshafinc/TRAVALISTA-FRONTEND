import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GuideService } from 'src/app/services/guide.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss'],
})
export class PackagesComponent implements OnInit {
  packages: any[] = [];
  guideId!: null;

  constructor(private guideService: GuideService , private route:ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((data) => {
      this.getPackages(data.get('guideId'));
      console.log(data.get('guideId'));
      
    })
  }

  getPackages(guideId: String | null = null) {
    console.log(guideId);
    
    this.guideService.guideGetPackage(guideId).subscribe({
      next: (data) => {
        console.log(data);
        this.packages = data.packages
       
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
