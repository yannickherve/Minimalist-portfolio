import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoreEntryComponent} from './core/core-entry/core-entry.component';

const routes: Routes = [
  {
    path: '',
    component: CoreEntryComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/page.module').then((m) => m.PageModule),
      },
      {
        path: 'portfolio',
        loadChildren: () => import('./modules/portfolio/portfolio.module').then((m) => m.PortfolioModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
