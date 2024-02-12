import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { FooterComponent } from "src/app/components/footer/footer.component";
import { HeaderComponent } from "src/app/components/header/header.component";

@NgModule({
    declarations:[
        HeaderComponent,
        FooterComponent,
        
    ],
    imports:[
        FormsModule,
        CommonModule
    ],
    exports:[HeaderComponent,FooterComponent]
})

export class SharedModule {}