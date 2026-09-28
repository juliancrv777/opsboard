import { Routes } from '@angular/router';
import { AppShellComponent } from './layout/app-shell/app-shell.component';

export const routes: Routes = [
  {
    path: '',
    component: AppShellComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', loadComponent: () => import('./features/dashboard/pages/dashboard-page.component').then(m => m.DashboardPageComponent) }
    ]
  },
  { path: '**', redirectTo: 'dashboard' }
];
