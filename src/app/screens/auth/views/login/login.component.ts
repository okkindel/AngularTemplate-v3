import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthRepository } from '@api/auth/auth.repository';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { setToken } from '@shared/utils';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  host: { id: 'login' },
})
export class LoginComponent {
  private readonly _translateService = inject(TranslateService);
  private readonly _authRepo = inject(AuthRepository);
  private readonly _route = inject(ActivatedRoute);
  private readonly _toast = inject(ToastrService);
  private readonly _router = inject(Router);

  public form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      nonNullable: true,
    }),
    password: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
  });

  public onSubmit(): void {
    this.form.markAllAsTouched();

    if (this.form.valid) {
      this._authRepo.login(this.form.getRawValue()).subscribe((response) => {
        if (!!response.token) {
          this._toast.success(this._translateService.instant('LOG_IN_SUCCESS'));
          setToken(response.token);
          this._navigateToRedirectUrl();
        }
      });
    }
  }

  private _navigateToRedirectUrl(): void {
    const redirectURL = this._route.snapshot.queryParamMap.get('redirectURL');

    if (redirectURL) {
      this._router
        .navigate([redirectURL])
        .catch(() => this._router.navigate(['/']));
    } else {
      this._router.navigate(['/']).then();
    }
  }
}
