import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from './material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import { SidenavLeftComponent } from './navigation/sidenav-left/sidenav-left.component';
import {HeaderComponent} from './navigation/header/header.component';
import {FooterComponent} from './navigation/footer/footer.component';
import { PageBannerComponent } from './navigation/page-banner/page-banner.component';
import { ProjectsNavComponent } from './navigation/projects-nav/projects-nav.component';

@NgModule({
  declarations: [SidenavLeftComponent, HeaderComponent, FooterComponent, PageBannerComponent, ProjectsNavComponent],
  imports: [
    RouterModule,
    MaterialModule,
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    MaterialModule,
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    SidenavLeftComponent,
    HeaderComponent,
    FooterComponent,
    PageBannerComponent,
    ProjectsNavComponent
  ]
})
export class SharedModule { }
