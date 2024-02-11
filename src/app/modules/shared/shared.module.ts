import { NgModule } from "@angular/core";
import { FooterComponent } from "src/app/components/footer/footer.component";
import { HeaderComponent } from "src/app/components/header/header.component";

@NgModule({
    declarations:[
        HeaderComponent,
        FooterComponent
    ],
    exports:[HeaderComponent,FooterComponent]
})

export class SharedModule {}