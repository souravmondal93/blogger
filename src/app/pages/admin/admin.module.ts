import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardOneComponent } from './dashboard-one/dashboard-one.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [AdminComponent, DashboardOneComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ComponentsModule
  ]
})
export class AdminModule { }
