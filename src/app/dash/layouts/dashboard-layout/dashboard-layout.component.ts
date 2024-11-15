
import { Component, computed, inject, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { MyService } from '../../services/my.service';

@Component({
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css'],
})
export class DashboardLayoutComponent implements OnInit {
  private authService = inject(AuthService);

  public user = computed(() => this.authService.currentUser());

  // get user() {
  //   return this.authService.currentUser();
  // }
  onLogout() {
    this.authService.logout();
  }

  personas: any[] = [];

  constructor(private _myServices: MyService) {}

  ngOnInit(): void {
    console.log('dashboard-layout->consultar-component');
  }
}
