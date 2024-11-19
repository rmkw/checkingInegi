import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { CheckTokenResponse } from '../auth/interfaces/check-token.response';
import { ConsultarComponent } from './pages/consultar/consultar.component';
import { CalendarComponent } from './pages/calendar/calendar.component';

const routes: Routes = [
  {
    path: '',
    // component: DashboardLayoutComponent,
    component: CalendarComponent,
    children: [
      {
        path: '',
        component: ConsultarComponent,
      },
      {
        path: 'calendar',
        component: CalendarComponent
      },
      { path: '**', redirectTo: 'dashboard' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashRoutingModule { }
