import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardOneComponent } from './dashboard-one/dashboard-one.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard-one',
        component: DashboardOneComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
