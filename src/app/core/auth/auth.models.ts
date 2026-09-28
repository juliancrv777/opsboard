export type UserRole = 'ADMIN' | 'MANAGER' | 'MEMBER';
export interface AuthUser { id: string; name: string; email: string; role: UserRole; }
export interface AuthSession { accessToken: string; user: AuthUser; }
export interface LoginCredentials { email: string; password: string; }
