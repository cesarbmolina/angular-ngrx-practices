import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// pages

import { HomeComponent } from './pages/home/home.component';
import { AppsComponent } from './pages/apps/apps.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const APP_ROUTES_NAMES = {
  HOME: 'home',
  APP: 'apps-new',
  DASHBOARD: 'dashboard'
};

const routes: Routes = [
  { path: '', redirectTo: APP_ROUTES_NAMES.HOME, pathMatch: 'full' },
  {
    path: APP_ROUTES_NAMES.HOME,
    component: HomeComponent,
  },
  {
    path: APP_ROUTES_NAMES.APP,
    component: AppsComponent,
  },
  {
    path: APP_ROUTES_NAMES.DASHBOARD,
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
