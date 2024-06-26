import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PackageService } from 'src/app/modules/guide/services/package.service';
import { PaymentService } from 'src/app/services/payment.service';
import { UserDAtaService } from 'src/app/services/userData.service';

declare var Razorpay:any

@Component({
  selector: 'app-showpackagedetails',
  templateUrl: './showpackagedetails.component.html',
  styleUrls: ['./showpackagedetails.component.scss'],
})
export class ShowpackagedetailsComponent implements OnInit {
  packageId: String | null = null;
  packageDetails: any = {};
  orderId:any
  data:any
  guideId:any

  constructor(
    private actRoute: ActivatedRoute,
    private packageService: PackageService,
    private paymantService:PaymentService,
    private userdata:UserDAtaService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe((data) => {
      this.packageId = data.get('packageid');

      this.packageService.getPackageshow(this.packageId).subscribe({
        next: (data) => {
          if (data.expiry){
            alert('session expired please login')
            console.log(';mflsdjfklkdfklgf');
            this.userdata.isLogout()
            
          }
          this.packageDetails = data;
          this.guideId = this.packageDetails.guideId
          console.log(this.guideId);
          
          console.log(this.packageDetails);
          
          
        },
        error: (error) => {
          console.log(error);
        },
      });
    });

    // Initialize Razorpay here
  }

  payNow(amount:Number) {
    console.log(amount);
    this.paymantService.createOrder(amount).subscribe({
      next:(response:any)=>{
        
        console.log(response);
        this.orderId = response.id

        const razorPayOptions = {
          description: this.packageDetails.description,
          currency: 'INR',
          amount: this.packageDetails.amount*100,
          name: 'Travalista',
          key: 'rzp_test_OH7LNib7KKvzcR',
          order_id : this.orderId,
          theme: {
            color: '#6466e3',
          },
          modal: {
            ondismiss: () => {
              console.log('dismissed');
            },
          },
          handler:(respone:any)=>{
            console.log('hai');
            console.log(respone)
           this.paymentHandler(respone, this.packageId)
            
          }
        };
    
      
    
        const razorpay = new Razorpay(razorPayOptions)
        razorpay.open()
        
      }
    })
  
  }

  chat(){
    this.router.navigateByUrl(`/chat/${this.guideId}`)
    console.log('router');
    
  }

  paymentHandler(respone:any, packageId:any){
    this.data = respone
    console.log(respone);
    console.log(packageId);
    
    this.paymantService.paymentSuccess(this.data,packageId).subscribe({
      next:(data)=>{
        console.log(data);  
      },
      error:(error)=>{
        console.log(error);
        
      }
    })
    
  }
}
