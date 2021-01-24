import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {RouterModule} from '@angular/router';
import { CoreEntryComponent } from './core-entry/core-entry.component';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [CoreEntryComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    SharedModule
  ]
})
export class CoreModule { }
