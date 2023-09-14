import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Optional } from '@shared/models';

export const CheckPasswordsValidator: ValidatorFn = (
  control: AbstractControl,
): Optional<ValidationErrors> => {
  const confirmPass = control.value;
  const pass = control.parent?.get('password')?.value;
  return pass === confirmPass ? null : { notSame: true };
};

export const IsPasswordStrongValidator: ValidatorFn = (
  control: AbstractControl,
): Optional<ValidationErrors> => {
  const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  const hasNumber = /\d/.test(control.value);
  const hasSpecialCharacter = specialCharacters.test(control.value);
  return hasNumber || hasSpecialCharacter ? null : { notStrong: true };
};
