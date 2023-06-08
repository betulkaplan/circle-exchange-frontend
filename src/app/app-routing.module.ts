import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/auth/components/login/login.component';
import { DashboardComponent } from './features/components/dashboard/dashboard.component';
import { PropertyPageComponent } from './features/components/property-page/property-page.component';
import { AboutPageComponent } from './features/components/about-page/about-page.component';
import { RegisterPageComponent } from './core/auth/components/register-page/register-page.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'property', component: PropertyPageComponent },
  { path: 'about', component: AboutPageComponent },
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
