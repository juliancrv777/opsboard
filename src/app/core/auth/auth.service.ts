import { Injectable, computed, signal } from '@angular/core';
import { Observable, delay, of, tap, throwError } from 'rxjs';
import { AuthSession, LoginCredentials } from './auth.models';

const SESSION_KEY = 'opsboard.session';
@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly session = signal<AuthSession | null>(this.restoreSession());
  readonly user = computed(() => this.session()?.user ?? null);
  readonly accessToken = computed(() => this.session()?.accessToken ?? null);
  readonly isAuthenticated = computed(() => Boolean(this.accessToken()));

  login(credentials: LoginCredentials): Observable<AuthSession> {
    if (credentials.email !== 'admin@opsboard.dev' || credentials.password !== 'OpsBoard123!') {
      return throwError(() => new Error('Invalid email or password.'));
    }
    const session: AuthSession = { accessToken: 'demo.jwt.token', user: { id:'usr_01', name:'Julian Silva', email:credentials.email, role:'ADMIN' } };
    return of(session).pipe(delay(650), tap(value => this.persist(value)));
  }

  logout(): void { localStorage.removeItem(SESSION_KEY); this.session.set(null); }
  private persist(session: AuthSession): void { localStorage.setItem(SESSION_KEY, JSON.stringify(session)); this.session.set(session); }
  private restoreSession(): AuthSession | null { try { const raw=localStorage.getItem(SESSION_KEY); return raw ? JSON.parse(raw) as AuthSession : null; } catch { return null; } }
}
