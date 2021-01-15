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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
