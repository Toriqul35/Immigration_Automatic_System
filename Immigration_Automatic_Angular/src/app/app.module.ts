import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirRouteComponent } from './air-route/air-route.component';
import { AirLineComponent } from './air-line/air-line.component';
import { CheckInComponent } from './check-in/check-in.component';
import { ImmigrationComponent } from './immigration/immigration.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { EPassportComponent } from './e-passport/e-passport.component';
import { ETicketComponent } from './e-ticket/e-ticket.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

import { MasterComponent } from './master/master.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    
    AirRouteComponent,
    AirLineComponent,
    CheckInComponent,
    ImmigrationComponent,
    UserComponent,
    AdminComponent,
    EPassportComponent,
    ETicketComponent,
    LoginComponent,
    RegistrationComponent,
    
    MasterComponent,
    
    AppLayoutComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
