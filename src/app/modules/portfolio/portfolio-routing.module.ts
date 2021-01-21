import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PortfolioHomeComponent} from './portfolio-home/portfolio-home.component';
import {PortfolioDetailManageComponent} from './portfolio-detail-manage/portfolio-detail-manage.component';
import {PortfolioDetailBookmarkComponent} from './portfolio-detail-bookmark/portfolio-detail-bookmark.component';
import {PortfolioDetailInsureComponent} from './portfolio-detail-insure/portfolio-detail-insure.component';
import {PortfolioDetailFyloComponent} from './portfolio-detail-fylo/portfolio-detail-fylo.component';

const routes: Routes = [
  {
    path: '',
    component: PortfolioHomeComponent,
  },
  {
    path: 'project-manage',
    component: PortfolioDetailManageComponent,
  },
  {
    path: 'project-bookmark',
    component: PortfolioDetailBookmarkComponent,
  },
  {
    path: 'project-insure',
    component: PortfolioDetailInsureComponent,
  },
  {
    path: 'project-fylo',
    component: PortfolioDetailFyloComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule {
}
