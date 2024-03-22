import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PackageService } from 'src/app/modules/guide/services/package.service';

declare var Razorpay:any

@Component({
  selector: 'app-showpackagedetails',
  templateUrl: './showpackagedetails.component.html',
  styleUrls: ['./showpackagedetails.component.scss'],
})
export class ShowpackagedetailsComponent implements OnInit {
  packageId: String | null = null;
  packageDetails: any = {};

  constructor(
    private actRoute: ActivatedRoute,
    private packageService: PackageService
  ) {}

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe((data) => {
      this.packageId = data.get('packageid');

      this.packageService.getPackageshow(this.packageId).subscribe({
        next: (data) => {
          this.packageDetails = data;
        },
        error: (error) => {
          console.log(error);
        },
      });
    });

    // Initialize Razorpay here
  }

  payNow() {
    const razorPayOptions = {
      description: this.packageDetails.description,
      currency: 'INR',
      amount: this.packageDetails.amount*100,
      name: 'Travalista',
      key: 'rzp_test_OH7LNib7KKvzcR',
      image: 'https://w7.pngwing.com/pngs/791/242/png-transparent-world-travel-illustration-world-map-globe-travel-global-travel-logo-computer-wallpaper-world-thumbnail.png',
      theme: {
        color: '#6466e3',
      },
      modal: {
        ondismiss: () => {
          console.log('dismissed');
        },
      },
      handler:(respone:any)=>{
        console.log(respone.razorpay_payment_id);
        
      }
    };

  

    const razorpay = new Razorpay(razorPayOptions)
    razorpay.open()
  }
}
