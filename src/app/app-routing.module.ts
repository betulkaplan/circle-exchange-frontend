import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/auth/components/login/login.component';
import { DashboardComponent } from './features/components/dashboard/dashboard.component';
import { PropertyPageComponent } from './features/components/property-page/property-page.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'property', component: PropertyPageComponent },
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
