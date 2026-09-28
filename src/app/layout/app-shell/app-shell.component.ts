import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
@Component({selector:'app-shell',standalone:true,imports:[RouterOutlet,RouterLink,RouterLinkActive],templateUrl:'./app-shell.component.html',styleUrl:'./app-shell.component.scss',changeDetection:ChangeDetectionStrategy.OnPush})
export class AppShellComponent {
  protected readonly auth=inject(AuthService); private readonly router=inject(Router); protected readonly mobileNavOpen=signal(false);
  protected readonly navItems=[{label:'Overview',route:'/dashboard',icon:'⌂'},{label:'Projects',route:'/projects',icon:'▦'},{label:'Tasks',route:'/tasks',icon:'✓'},{label:'Team',route:'/team',icon:'◎'}];
  protected toggleNavigation():void{this.mobileNavOpen.update(open=>!open)} protected closeNavigation():void{this.mobileNavOpen.set(false)}
  protected logout():void{this.auth.logout();void this.router.navigate(['/login']);}
}
