import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { DashboardSnapshot } from '../models/dashboard.models';

@Injectable({providedIn:'root'})
export class DashboardRepository {
  getSnapshot():Observable<DashboardSnapshot>{
    return of({activeProjects:8,openTasks:24,teamMembers:12,completionRate:84,activity:[
      {id:'act_1',title:'Website redesign moved to Review',meta:'Product',occurredAt:'12 min ago'},
      {id:'act_2',title:'API integration assigned to Marina',meta:'Platform',occurredAt:'42 min ago'},
      {id:'act_3',title:'Q4 planning project created',meta:'Operations',occurredAt:'2 hours ago'}
    ],workload:[{label:'Mon',completed:9},{label:'Tue',completed:14},{label:'Wed',completed:11},{label:'Thu',completed:18},{label:'Fri',completed:15},{label:'Sat',completed:21},{label:'Sun',completed:17}]}).pipe(delay(450));
  }
}
