import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { RouterModule } from '@angular/router';
import { GuideModule } from '../guide/guide.module';
import { PackagesComponent } from '../guide/components/packages/packages.component';
import { ChatComponent } from 'src/app/components/chat/chat.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PackagesComponent,
    ChatComponent
  ],
  imports: [FormsModule, CommonModule, RouterModule],

  exports: [HeaderComponent, FooterComponent, HomeComponent, PackagesComponent, ChatComponent],
})
export class SharedModule {}
