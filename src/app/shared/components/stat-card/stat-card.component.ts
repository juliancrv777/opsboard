import { ChangeDetectionStrategy, Component, input } from '@angular/core';
@Component({selector:'app-stat-card',standalone:true,template:'<article><div class="label">{{ label() }}</div><strong>{{ value() }}</strong><div class="trend" [class.positive]="positive()">↗ {{ trend() }}</div></article>',styleUrl:'./stat-card.component.scss',changeDetection:ChangeDetectionStrategy.OnPush})
export class StatCardComponent { readonly label=input.required<string>(); readonly value=input.required<string|number>(); readonly trend=input(''); readonly positive=input(true); }
