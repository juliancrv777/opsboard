import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({selector:'app-dashboard-page',standalone:true,templateUrl:'./dashboard-page.component.html',styleUrl:'./dashboard-page.component.scss',changeDetection:ChangeDetectionStrategy.OnPush})
export class DashboardPageComponent {
  protected readonly title = signal('Operations overview');
  protected readonly metrics = signal([
    { label: 'Active projects', value: 8 },
    { label: 'Open tasks', value: 24 },
    { label: 'Team members', value: 12 }
  ]);
}
