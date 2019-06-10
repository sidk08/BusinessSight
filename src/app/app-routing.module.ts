import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesSectionComponent } from './sales-section/sales-section.component';
import { OrdersSectionComponent } from './orders-section/orders-section.component';
import { HealthSectionComponent } from './health-section/health-section.component';

const routes: Routes = [
  { path: 'sales', component: SalesSectionComponent},
  { path: 'orders', component: OrdersSectionComponent},
  { path: 'health', component: HealthSectionComponent},
  { path: '', redirectTo : '/sales', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
