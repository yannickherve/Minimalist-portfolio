import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { HomeComponent } from './home/home.component';
import {SharedModule} from '../shared/shared.module';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [HomeComponent, ContactComponent],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    SharedModule
  ]
})
export class PageModule { }
