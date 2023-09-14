import {
  IsPasswordStrongValidator,
  CheckPasswordsValidator,
} from '../../validators';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthRepository } from '@api/auth/auth.repository';
import { ActivatedRoute, Router } from '@angular/router';
import { clearToken, setToken } from '@shared/utils';
import { Component } from '@angular/core';
import { RegisterRequest } from '@api/auth/models';

@Component({
  selector: 'prj-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public form = new FormGroup(
    {
      password: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.minLength(8),
          Validators.required,
          IsPasswordStrongValidator,
        ],
      }),
      repassword: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, CheckPasswordsValidator],
      }),
      regulations: new FormControl(false),
    },
    {},
  );

  constructor(
    private readonly _authRepo: AuthRepository,
    private readonly _route: ActivatedRoute,
    private readonly _router: Router,
  ) {
    clearToken();
  }

  public checkboxChange(): void {
    this.form
      .get('regulations')
      ?.setValue(!this.form.get('regulations')?.value);
  }

  public onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const request: RegisterRequest = {
        password: this.form.get('password')?.value,
        token: this._route.snapshot.params['id'],
      };
      this._authRepo.register(request).subscribe((response) => {
        setToken(response.token);
        this._router.navigate(['/']);
      });
    }
  }
}
