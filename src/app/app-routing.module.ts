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
        data: { animation: 'HomePage' }
      },
      {
        path: 'portfolio',
        loadChildren: () => import('./modules/portfolio/portfolio.module').then((m) => m.PortfolioModule),
        data: {animation: 'PortfolioHome'}
      },
      {
        path: 'contact',
        loadChildren: () => import('./modules/contact/contact.module').then((m) => m.ContactModule),
        data: {animation: 'ContactPage'}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
