import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from './master/master.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { EPassportComponent } from './e-passport/e-passport.component';

const routes: Routes = [
  
  {
    path: '',
    component: AppLayoutComponent,
    children:[
      { path: 'master', component: MasterComponent, pathMatch: 'full'},
      { path: 'e-passport', component: EPassportComponent, pathMatch: 'full'},
    ]
  },

  { path: 'login', component: LoginComponent, pathMatch: 'full'},
  { path: 'registration', component: RegistrationComponent, pathMatch: 'full'},
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


