import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackStateComponent } from '../../../shared/components/feedback-state/feedback-state.component';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { SkeletonCardComponent } from '../../../shared/components/skeleton-card/skeleton-card.component';
import { StatCardComponent } from '../../../shared/components/stat-card/stat-card.component';
import { DashboardStore } from '../state/dashboard.store';
@Component({selector:'app-dashboard-page',standalone:true,imports:[PageHeaderComponent,StatCardComponent,SkeletonCardComponent,FeedbackStateComponent],providers:[DashboardStore],templateUrl:'./dashboard-page.component.html',styleUrl:'./dashboard-page.component.scss',changeDetection:ChangeDetectionStrategy.OnPush})
export class DashboardPageComponent implements OnInit { protected readonly store=inject(DashboardStore); private readonly router=inject(Router); ngOnInit():void{this.store.load();} protected createProject():void{void this.router.navigate(['/projects'],{queryParams:{create:'true'}});} protected barHeight(value:number):string{return `${Math.round((value/this.store.maxWorkload())*100)}%`;}}
