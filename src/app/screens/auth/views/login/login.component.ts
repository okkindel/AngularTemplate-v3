import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthRepository } from '@api/auth/auth.repository';
import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { setToken } from '@shared/utils';

@Component({
  selector: 'prj-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public email: string = '23';

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
    private readonly _authRepo: AuthRepository,
    private readonly _route: ActivatedRoute,
    private readonly _router: Router,
  ) {}

  public onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this._authRepo.login(this.form.value).subscribe((response) => {
        if (!!response.token) {
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
      this._router.navigate(['/']);
    }
  }
}
