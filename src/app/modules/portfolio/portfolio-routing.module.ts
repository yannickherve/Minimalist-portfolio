import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PortfolioHomeComponent} from './portfolio-home/portfolio-home.component';

const routes: Routes = [
  {
    path: '',
    component: PortfolioHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
