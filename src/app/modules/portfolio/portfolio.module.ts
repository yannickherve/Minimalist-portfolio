import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioHomeComponent } from './portfolio-home/portfolio-home.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [PortfolioHomeComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    SharedModule
  ]
})
export class PortfolioModule { }
