import {
  ChangeDetectorRef,
  booleanAttribute,
  AfterViewInit,
  HostListener,
  HostBinding,
  ElementRef,
  Directive,
  Optional,
  DoCheck,
  Input,
} from '@angular/core';
import { VariantProps, cva } from 'class-variance-authority';
import { NgControl, Validators } from '@angular/forms';
import { twMerge } from 'tailwind-merge';

const inputVariants = cva(
  'block w-full rounded-md shadow-sm transition duration-150 ease-in-out sm:text-sm sm:leading-5',
  {
    variants: {
      mode: {
        default:
          'border-gray-300 bg-white focus:border-indigo-500 focus:ring-indigo-500',
        outline:
          'border-gray-300 bg-white focus:border-indigo-500 focus:ring-indigo-500',
      },
      size: {
        default: 'h-10 px-3',
        sm: 'h-9 rounded-md px-2',
        lg: 'h-12 rounded-md px-4 text-base',
      },
      error: {
        true: 'border-red-300 bg-red-50 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500',
      },
      disabled: {
        true: 'cursor-not-allowed bg-gray-100 text-gray-500',
      },
    },
    defaultVariants: {
      mode: 'default',
      size: 'default',
      error: false,
    },
  },
);
type Variant = VariantProps<typeof inputVariants>;

@Directive({
  selector: 'input[prjInput]',
})
export class InputDirective implements DoCheck, AfterViewInit {
  @Input({ transform: booleanAttribute }) public disabled: Variant['disabled'];
  @Input({ transform: booleanAttribute }) public error: Variant['error'];
  @Input({ transform: booleanAttribute }) public required?: boolean;
  @Input() public mode: Variant['mode'];
  @Input() public size: Variant['size'];

  public filled: boolean = false;

  @HostBinding('class') public get classes(): string {
    return twMerge(inputVariants(this));
  }

  @HostListener('input', ['$event'])
  public onInput(): void {
    this.updateState();
  }

  constructor(
    @Optional() private readonly _ngControl: NgControl,
    private readonly _cd: ChangeDetectorRef,
    private readonly _el: ElementRef,
  ) {}

  public ngAfterViewInit(): void {
    this.updateState();
    this._cd.detectChanges();
  }

  public ngDoCheck(): void {
    this.updateState();
  }

  public updateState(): void {
    this.disabled = this._hasDisabledState();
    this.filled = this._hasValueInside();
    this.error = this._hasErrorState();
    this._placePlaceholderValue();
  }

  private _placePlaceholderValue(): void {
    if (
      this._ngControl?.control?.hasValidator(Validators.required) ||
      this.required
    ) {
      const placeholderValue: string = this._el.nativeElement.placeholder;
      if (placeholderValue && !placeholderValue.endsWith('*')) {
        this._el.nativeElement.placeholder += ' *';
      }
    }
  }

  private _hasDisabledState(): boolean {
    return !!this._el.nativeElement.disabled;
  }

  private _hasValueInside(): boolean {
    return !!this._el.nativeElement.value.length;
  }

  private _hasErrorState(): boolean {
    if (!this._ngControl) return !!this.error;
    return !!(this._ngControl?.touched && this._ngControl?.invalid);
  }
}
