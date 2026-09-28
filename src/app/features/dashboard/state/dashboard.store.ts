import { Injectable, computed, inject, signal } from '@angular/core';
import { finalize } from 'rxjs';
import { DashboardRepository } from '../data/dashboard.repository';
import { DashboardMetric, DashboardSnapshot } from '../models/dashboard.models';

@Injectable()
export class DashboardStore {
  private readonly repository=inject(DashboardRepository);
  private readonly snapshot=signal<DashboardSnapshot|null>(null);
  readonly loading=signal(false); readonly error=signal<string|null>(null);
  readonly activity=computed(()=>this.snapshot()?.activity ?? []); readonly workload=computed(()=>this.snapshot()?.workload ?? []);
  readonly maxWorkload=computed(()=>Math.max(...this.workload().map(item=>item.completed),1));
  readonly metrics=computed<DashboardMetric[]>(()=>{const data=this.snapshot();if(!data)return[];return[
    {label:'Active projects',value:data.activeProjects,trend:'12% this month',trendDirection:'up'},
    {label:'Open tasks',value:data.openTasks,trend:'8 completed today',trendDirection:'neutral'},
    {label:'Team members',value:data.teamMembers,trend:'2 joined recently',trendDirection:'up'},
    {label:'Completion rate',value:`${data.completionRate}%`,trend:'6% improvement',trendDirection:'up'}];});
  load():void{this.loading.set(true);this.error.set(null);this.repository.getSnapshot().pipe(finalize(()=>this.loading.set(false))).subscribe({next:data=>this.snapshot.set(data),error:()=>this.error.set('Unable to load dashboard data. Please try again.')});}
  retry():void{this.load();}
}
