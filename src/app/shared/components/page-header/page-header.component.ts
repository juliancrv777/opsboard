import { ChangeDetectionStrategy, Component, input } from '@angular/core';
@Component({selector:'app-page-header',standalone:true,template:'<header class="page-header"><div><p>{{ eyebrow() }}</p><h1>{{ title() }}</h1><span>{{ description() }}</span></div><ng-content /></header>',styleUrl:'./page-header.component.scss',changeDetection:ChangeDetectionStrategy.OnPush})
export class PageHeaderComponent { readonly eyebrow=input('Workspace'); readonly title=input.required<string>(); readonly description=input(''); }
