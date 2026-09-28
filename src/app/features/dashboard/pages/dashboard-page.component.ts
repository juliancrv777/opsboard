import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { StatCardComponent } from '../../../shared/components/stat-card/stat-card.component';

@Component({selector:'app-dashboard-page',standalone:true,imports:[PageHeaderComponent,StatCardComponent],templateUrl:'./dashboard-page.component.html',styleUrl:'./dashboard-page.component.scss',changeDetection:ChangeDetectionStrategy.OnPush})
export class DashboardPageComponent {
  protected readonly metrics = signal([
    { label:'Active projects', value:8, trend:'12% this month' },
    { label:'Open tasks', value:24, trend:'8 completed today' },
    { label:'Team members', value:12, trend:'2 joined recently' },
    { label:'Completion rate', value:'84%', trend:'6% improvement' }
  ]);
  protected readonly activity = signal([
    { title:'Website redesign moved to Review', meta:'Product · 12 min ago' },
    { title:'API integration assigned to Marina', meta:'Platform · 42 min ago' },
    { title:'Q4 planning project created', meta:'Operations · 2 hours ago' }
  ]);
}
