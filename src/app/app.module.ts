import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SalesSectionComponent } from './sales-section/sales-section.component';
import { OrdersSectionComponent } from './orders-section/orders-section.component';
import { HealthSectionComponent } from './health-section/health-section.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ServerStatusComponent } from './server-status/server-status.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SalesSectionComponent,
    OrdersSectionComponent,
    HealthSectionComponent,
    BarChartComponent,
    PieChartComponent,
    LineChartComponent,
    ServerStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
