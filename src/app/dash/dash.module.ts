import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { ConsultarComponent } from './pages/consultar/consultar.component';


@NgModule({
  declarations: [
    DashboardLayoutComponent,
    ConsultarComponent
  ],
  imports: [
    CommonModule,
    DashRoutingModule
  ]
})
export class DashModule { }
