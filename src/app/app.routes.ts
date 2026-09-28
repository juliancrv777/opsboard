import { Routes } from '@angular/router';
import { authGuard } from './core/auth/auth.guard';
import { guestGuard } from './core/auth/guest.guard';
import { AppShellComponent } from './layout/app-shell/app-shell.component';

export const routes: Routes = [
  { path:'login', canActivate:[guestGuard], loadComponent:()=>import('./features/auth/pages/login-page/login-page.component').then(m=>m.LoginPageComponent) },
  { path:'', component:AppShellComponent, canActivate:[authGuard], children:[
    { path:'', pathMatch:'full', redirectTo:'dashboard' },
    { path:'dashboard', loadComponent:()=>import('./features/dashboard/pages/dashboard-page.component').then(m=>m.DashboardPageComponent) }
  ]},
  { path:'**', redirectTo:'dashboard' }
];
