import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { FooterComponent } from "src/app/components/footer/footer.component";
import { HeaderComponent } from "src/app/components/header/header.component";
import { HomeComponent } from "src/app/components/home/home.component";
import { RouterModule } from "@angular/router";
import { PopularDestinationsComponent } from "src/app/components/popular-destinations/popular-destinations.component";

@NgModule({
    declarations:[
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        PopularDestinationsComponent
        
    ],
    imports:[
        FormsModule,
        CommonModule,
        RouterModule
    ],
    exports:[HeaderComponent,FooterComponent,HomeComponent]
})

export class SharedModule {}