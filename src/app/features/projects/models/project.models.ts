export type ProjectStatus='PLANNING'|'ACTIVE'|'ON_HOLD'|'COMPLETED';
export interface Project { id:string; name:string; description:string; status:ProjectStatus; owner:string; dueDate:string; progress:number; taskCount:number; }
export type ProjectDraft=Pick<Project,'name'|'description'|'status'|'owner'|'dueDate'>;
