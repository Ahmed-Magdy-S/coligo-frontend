import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardNavbarComponent } from './dashboard-navbar/dashboard-navbar.component';
import { DashboardService } from './service/dashboard-service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    DashboardMainComponent,
    DashboardComponent,
    DashboardNavbarComponent,
  ],
  providers:[DashboardService],
  imports: [
    CommonModule,NgbModule,HttpClientModule
  ],
  exports:[DashboardComponent]
})
export class DashboardModule { }
