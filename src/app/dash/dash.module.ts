import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { ConsultarComponent } from './pages/consultar/consultar.component';
import { CalendarComponent } from './pages/calendar/calendar.component';


import { FullCalendarModule } from '@fullcalendar/angular';


@NgModule({
  declarations: [
    DashboardLayoutComponent,
    ConsultarComponent,
    CalendarComponent,


  ],
  imports: [
    CommonModule,
    DashRoutingModule,
    FullCalendarModule
  ]
})
export class DashModule { }
