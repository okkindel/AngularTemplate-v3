import {
  ChangeDetectorRef,
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
import { NgModel } from '@angular/forms';
import { twMerge } from 'tailwind-merge';

const inputVariants = cva(
  'block w-full rounded-md shadow-sm transition duration-150 ease-in-out sm:text-sm sm:leading-5',
  {
    variants: {
      mode: {
        default:
          'border-gray-300 bg-white focus:border-indigo-500 focus:ring-indigo-500',
        error:
          'border-red-300 bg-red-50 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500',
        outline:
          'border-gray-300 bg-white focus:border-indigo-500 focus:ring-indigo-500',
      },
      size: {
        default: 'h-10 px-3',
        sm: 'h-9 rounded-md px-2',
        lg: 'h-12 rounded-md px-4 text-base',
      },
      filled: {
        true: 'placeholder-transparent',
        false: 'placeholder-gray-400',
      },
    },
    defaultVariants: {
      mode: 'default',
      size: 'default',
    },
  },
);
type InputVariant = VariantProps<typeof inputVariants>;

@Directive({
  selector: 'input[prjInput]',
})
export class InputDirective implements DoCheck, AfterViewInit {
  @Input() public mode: InputVariant['mode'];
  @Input() public size: InputVariant['size'];

  public filled: boolean = false;

  @HostBinding('class') public get classes(): string {
    return twMerge(inputVariants(this));
  }

  constructor(
    public el: ElementRef,
    @Optional() public ngModel: NgModel,
    private cd: ChangeDetectorRef,
  ) {}

  public ngAfterViewInit(): void {
    this.updateFilledState();
    this.cd.detectChanges();
  }

  public ngDoCheck(): void {
    this.updateFilledState();
  }

  @HostListener('input', ['$event'])
  public onInput(): void {
    this.updateFilledState();
  }

  public updateFilledState(): void {
    this.filled = !!(
      (this.el.nativeElement.value && this.el.nativeElement.value.length) ||
      (this.ngModel && this.ngModel.model)
    );
  }
}
