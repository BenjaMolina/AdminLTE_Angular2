import { NgModule, Component } from '@angular/core';

import {RouterModule, Routes, Router} from '@angular/router';

import { Dashboardv1Component } from '../components/dashboard/dashboardv1/dashboardv1.component';
import { Dashboardv2Component } from '../components/dashboard/dashboardv2/dashboardv2.component';

const routes:Routes = [
  {
    path: 'dashboardv1',
    component: Dashboardv1Component
  },
  {
    path: 'dashboardv2',
    component: Dashboardv2Component
  },
  

  {
    path: "",
    redirectTo:'/dashboardv1',
    pathMatch: 'full',
  }
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule { }
