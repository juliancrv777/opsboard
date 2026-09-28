import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Project, ProjectDraft } from '../models/project.models';
@Injectable({providedIn:'root'}) export class ProjectsRepository {
 private projects:Project[]=[{id:'prj_1',name:'Customer Portal',description:'Redesign the self-service customer experience.',status:'ACTIVE',owner:'Julian Silva',dueDate:'2026-10-18',progress:72,taskCount:18},{id:'prj_2',name:'Billing Automation',description:'Automate recurring billing and reconciliation.',status:'ACTIVE',owner:'Marina Costa',dueDate:'2026-11-04',progress:46,taskCount:12},{id:'prj_3',name:'Q4 Planning',description:'Company-wide operating plan for Q4.',status:'PLANNING',owner:'Lucas Martins',dueDate:'2026-10-08',progress:20,taskCount:9},{id:'prj_4',name:'Mobile Refresh',description:'Improve mobile workflows and accessibility.',status:'ON_HOLD',owner:'Ana Souza',dueDate:'2026-12-12',progress:35,taskCount:14}];
 list():Observable<Project[]>{return of([...this.projects]).pipe(delay(300));}
 create(draft:ProjectDraft):Observable<Project>{const item:Project={id:`prj_${Date.now()}`,...draft,progress:0,taskCount:0};this.projects=[item,...this.projects];return of(item).pipe(delay(250));}
 update(id:string,draft:ProjectDraft):Observable<Project>{const current=this.projects.find(p=>p.id===id)!;const item={...current,...draft};this.projects=this.projects.map(p=>p.id===id?item:p);return of(item).pipe(delay(250));}
 remove(id:string):Observable<void>{this.projects=this.projects.filter(p=>p.id!==id);return of(void 0).pipe(delay(200));}
}
