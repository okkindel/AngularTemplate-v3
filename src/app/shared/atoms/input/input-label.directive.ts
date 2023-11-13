import { HostBinding, Directive, Input } from '@angular/core';
import { ClassArray, ClassValue } from 'clsx';
import { combine } from '@shared/utils';

const sizeClasses = `peer-placeholder-shown/base:top-2.5 peer-placeholder-shown/large:top-3
  peer-placeholder-shown/base:text-sm peer-placeholder-shown/large:text-base`;

const errorClasses = `peer-valid/error-true:text-pink-500 peer-invalid/error-true:text-pink-500 peer-focus/error-true:text-pink-500
  peer-invalid/error-native:text-pink-500 peer-invalid/error-native:peer-focus/error-native:text-pink-500
  peer-[&.ng-invalid.ng-touched]/error-auto:text-pink-500 peer-[&.ng-invalid.ng-touched]/error-auto:peer-focus/error-auto:text-pink-500`;

const disabledClasses = `peer-disabled:cursor-not-allowed peer-disabled:text-slate-400
  peer-disabled:before:bg-transparent`;

@Directive({ selector: 'label[appInputLabel]', standalone: true })
export class InputLabelDirective {
  @Input() public classes: ClassValue | ClassArray = [];

  @HostBinding('class') public get classNames(): string {
    return combine(
      `absolute -top-2 left-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute
        before:left-0 before:top-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white
        before:transition-all peer-autofill:-top-2 peer-required:after:ml-1 peer-required:after:content-['*']
        peer-focus:-top-2 peer-focus:left-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-primary-500`,
      disabledClasses,
      errorClasses,
      sizeClasses,
      this.classes,
    );
  }
}
