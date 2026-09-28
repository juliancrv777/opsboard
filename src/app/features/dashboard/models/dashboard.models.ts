export interface DashboardMetric { label:string; value:string|number; trend:string; trendDirection:'up'|'down'|'neutral'; }
export interface ActivityItem { id:string; title:string; meta:string; occurredAt:string; }
export interface WorkloadPoint { label:string; completed:number; }
export interface DashboardSnapshot { activeProjects:number; openTasks:number; teamMembers:number; completionRate:number; activity:ActivityItem[]; workload:WorkloadPoint[]; }
