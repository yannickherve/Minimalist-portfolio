import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PortfolioRoutingModule} from './portfolio-routing.module';
import {PortfolioHomeComponent} from './portfolio-home/portfolio-home.component';
import {SharedModule} from '../../shared/shared.module';
import {PortfolioDetailManageComponent} from './portfolio-detail-manage/portfolio-detail-manage.component';
import {PortfolioDetailBookmarkComponent} from './portfolio-detail-bookmark/portfolio-detail-bookmark.component';
import {PortfolioDetailInsureComponent} from './portfolio-detail-insure/portfolio-detail-insure.component';
import {PortfolioDetailFyloComponent} from './portfolio-detail-fylo/portfolio-detail-fylo.component';


@NgModule({
  declarations: [PortfolioHomeComponent,
    PortfolioDetailManageComponent,
    PortfolioDetailBookmarkComponent,
    PortfolioDetailInsureComponent,
    PortfolioDetailFyloComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    SharedModule
  ]
})
export class PortfolioModule {
}
