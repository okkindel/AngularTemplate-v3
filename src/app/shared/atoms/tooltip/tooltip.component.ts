import {
  ChangeDetectionStrategy,
  HostBinding,
  TemplateRef,
  Component,
} from '@angular/core';
import { VariantProps, cva } from 'class-variance-authority';
import { combine } from '@shared/utils';

const tooltipVariants = cva(
  `invisible absolute z-50 w-48 rounded bg-slate-700 p-4 text-sm text-white opacity-0 transition-all before:invisible before:absolute before:z-10 before:opacity-0 before:transition-all before:content-[''] group-hover:visible group-hover:block group-hover:opacity-100 group-hover:before:visible group-hover:before:opacity-100`,
  {
    variants: {
      position: {
        top: 'bottom-full left-1/2 mb-2 -translate-x-1/2 before:left-1/2 before:top-full before:-ml-2 before:mb-2 before:border-x-8 before:border-t-8 before:border-x-transparent before:border-t-slate-700',
        right:
          'left-full top-1/2 ml-2 -translate-y-1/2 before:right-full before:top-1/2 before:-mt-2 before:ml-2 before:border-y-8 before:border-r-8 before:border-y-transparent before:border-r-slate-700',
        bottom:
          'left-1/2 top-full mt-2 -translate-x-1/2 before:bottom-full before:left-1/2 before:-ml-2 before:mt-2 before:border-x-8 before:border-b-8 before:border-x-transparent before:border-b-slate-700',
        left: 'right-full top-1/2 mr-2 -translate-y-1/2 before:left-full before:top-1/2 before:-mt-2 before:mr-2 before:border-y-8 before:border-l-8 before:border-y-transparent before:border-l-slate-700',
      },
      size: {
        base: '',
        small: '',
      },
    },
    defaultVariants: {
      position: 'top',
      size: 'base',
    },
  },
);

export type TooltipVariant = VariantProps<typeof tooltipVariants>;
export interface TooltipOptions extends TooltipVariant {
  template?: TemplateRef<HTMLElement>;
  value?: string;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-container *ngIf="value">{{ value }}</ng-container>
    <ng-container *ngIf="!!template">
      <ng-container *ngTemplateOutlet="template" />
    </ng-container>
  `,
})
export class TooltipComponent implements TooltipOptions {
  @HostBinding('role') private _role = 'tooltip';

  public position: TooltipVariant['position'];
  public template?: TemplateRef<HTMLElement>;
  public size: TooltipVariant['size'];
  public value?: string;

  @HostBinding('class') public get classNames(): string {
    return combine(tooltipVariants(this));
  }
}
