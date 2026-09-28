import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({selector:'app-shell',standalone:true,imports:[RouterOutlet,RouterLink,RouterLinkActive],templateUrl:'./app-shell.component.html',styleUrl:'./app-shell.component.scss',changeDetection:ChangeDetectionStrategy.OnPush})
export class AppShellComponent {
  protected readonly mobileNavOpen = signal(false);
  protected readonly navItems = [
    { label: 'Overview', route: '/dashboard', icon: '⌂' },
    { label: 'Projects', route: '/projects', icon: '▦' },
    { label: 'Tasks', route: '/tasks', icon: '✓' },
    { label: 'Team', route: '/team', icon: '◎' }
  ];
  protected toggleNavigation(): void { this.mobileNavOpen.update(open => !open); }
  protected closeNavigation(): void { this.mobileNavOpen.set(false); }
}
