import {
  ViewContainerRef,
  ComponentRef,
  HostBinding,
  ElementRef,
  Directive,
  inject,
  OnInit,
  Input,
} from '@angular/core';
import { ClassArray, ClassValue } from 'clsx';
import { combine } from '@shared/utils';

import { TooltipComponent, TooltipOptions } from './tooltip.component';

@Directive({
  selector: '[appTooltip]',
})
export class TooltipDirective implements OnInit {
  private _elementRef = inject(ElementRef);
  private _viewContainerRef = inject(ViewContainerRef);

  @Input() public appTooltip?: TooltipOptions;

  @Input() public classes: ClassValue | ClassArray = [];

  @HostBinding('class') public get classNames(): string {
    return combine(
      'relative overflow-hidden group hover:overflow-visible focus-visible:outline-none',
      this.classes,
    );
  }

  public ngOnInit(): void {
    this._createTooltipStructure();
  }

  private _createAndInitializeTooltip(): ComponentRef<TooltipComponent> {
    const tooltip = this._viewContainerRef.createComponent(TooltipComponent);
    tooltip.instance.position = this.appTooltip?.position;
    tooltip.instance.template = this.appTooltip?.template;
    tooltip.instance.value = this.appTooltip?.value;
    tooltip.instance.size = this.appTooltip?.size;
    return tooltip;
  }

  private _createTooltipStructure(): void {
    const tooltipComponent = this._createAndInitializeTooltip();
    this._elementRef.nativeElement.appendChild(
      tooltipComponent.location.nativeElement,
    );
  }
}
