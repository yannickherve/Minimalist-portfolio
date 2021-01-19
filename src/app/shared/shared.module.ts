import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from './material/material.module';
import {CommonModule} from '@angular/common';
import { SidenavLeftComponent } from './navigation/sidenav-left/sidenav-left.component';
import {HeaderComponent} from './navigation/header/header.component';
import {FooterComponent} from './navigation/footer/footer.component';
import { PageBannerComponent } from './navigation/page-banner/page-banner.component';

@NgModule({
  declarations: [SidenavLeftComponent, HeaderComponent, FooterComponent, PageBannerComponent],
  imports: [
    RouterModule,
    MaterialModule,
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    MaterialModule,
    CommonModule,
    FlexLayoutModule,
    SidenavLeftComponent,
    HeaderComponent,
    FooterComponent,
    PageBannerComponent
  ]
})
export class SharedModule { }
