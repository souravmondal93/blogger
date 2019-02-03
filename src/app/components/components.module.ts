import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarOneComponent } from './navbar-one/navbar-one.component';
import { SidebarOneComponent } from './sidebar-one/sidebar-one.component';

@NgModule({
  declarations: [
    NavbarOneComponent,
    SidebarOneComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarOneComponent,
    SidebarOneComponent
  ]
})
export class ComponentsModule { }
