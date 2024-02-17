import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { FooterComponent } from "src/app/components/footer/footer.component";
import { HeaderComponent } from "src/app/components/header/header.component";
import { HomeComponent } from "src/app/components/home/home.component";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations:[
        HeaderComponent,
        FooterComponent,
        HomeComponent
        
    ],
    imports:[
        FormsModule,
        CommonModule,
        RouterModule
    ],
    exports:[HeaderComponent,FooterComponent,HomeComponent]
})

export class SharedModule {}