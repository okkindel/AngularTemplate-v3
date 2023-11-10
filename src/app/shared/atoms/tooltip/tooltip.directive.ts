import {
  ViewContainerRef,
  ComponentRef,
  TemplateRef,
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
  private _tmpRef = inject(TemplateRef);
  private _viewRef = inject(ViewContainerRef);

  @Input() public appTooltip?: TooltipOptions;
  @Input() public appTooltipClasses: ClassValue | ClassArray = [];

  public ngOnInit(): void {
    this._createTooltipStructure();
  }

  private _createAndInitializeTooltip(): ComponentRef<TooltipComponent> {
    const tooltip = this._viewRef.createComponent(TooltipComponent);
    tooltip.instance.position = this.appTooltip?.position;
    tooltip.instance.template = this.appTooltip?.template;
    tooltip.instance.value = this.appTooltip?.value;
    tooltip.instance.size = this.appTooltip?.size;
    return tooltip;
  }

  private _createTooltipStructure(): void {
    const combinedClasses = combine(
      'relative overflow-hidden group hover:overflow-visible focus-visible:outline-none',
      this.appTooltipClasses,
    );

    const [root] = this._viewRef.createEmbeddedView(this._tmpRef).rootNodes;
    const tooltipComponent = this._createAndInitializeTooltip();
    root.appendChild(tooltipComponent.location.nativeElement);
    root.setAttribute('class', combinedClasses);
  }
}
