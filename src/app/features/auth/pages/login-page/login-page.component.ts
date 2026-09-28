import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthService } from '../../../../core/auth/auth.service';
@Component({selector:'app-login-page',standalone:true,imports:[ReactiveFormsModule],templateUrl:'./login-page.component.html',styleUrl:'./login-page.component.scss',changeDetection:ChangeDetectionStrategy.OnPush})
export class LoginPageComponent {
 private readonly fb=inject(FormBuilder); private readonly auth=inject(AuthService); private readonly router=inject(Router); private readonly route=inject(ActivatedRoute);
 protected readonly loading=signal(false); protected readonly error=signal('');
 protected readonly form=this.fb.nonNullable.group({email:['admin@opsboard.dev',[Validators.required,Validators.email]],password:['OpsBoard123!',[Validators.required,Validators.minLength(8)]]});
 protected submit():void { if(this.form.invalid){this.form.markAllAsTouched();return;} this.loading.set(true);this.error.set('');this.auth.login(this.form.getRawValue()).pipe(finalize(()=>this.loading.set(false))).subscribe({next:()=>void this.router.navigateByUrl(this.route.snapshot.queryParamMap.get('returnUrl') ?? '/dashboard'),error:(err:Error)=>this.error.set(err.message)}); }
}
