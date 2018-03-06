import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { AppsettingsComponent } from './components/appsettings/appsettings.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { Dashboardv1Component } from './components/dashboard/dashboardv1/dashboardv1.component';
import { Dashboardv2Component } from './components/dashboard/dashboardv2/dashboardv2.component';

@NgModule({
  declarations: [
    AppComponent,
    AppfooterComponent,
    AppheaderComponent,
    AppmenuComponent,
    AppsettingsComponent,
    Dashboardv1Component,
    Dashboardv2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule //Para las rutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
