import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthRepository } from '@api/auth/auth.repository';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
import { setToken } from '@shared/utils';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
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

  constructor(
    private readonly _translateService: TranslateService,
    private readonly _authRepo: AuthRepository,
    private readonly _route: ActivatedRoute,
    private readonly _toast: ToastrService,
    private readonly _router: Router,
  ) {}

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
