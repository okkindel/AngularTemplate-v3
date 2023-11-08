import {
  ViewContainerRef,
  TemplateRef,
  Directive,
  OnInit,
  Input,
} from '@angular/core';

import { UserService } from '../services';
import { Permission } from '../enums';

@Directive({
  selector: '[appHasPermission]',
})
export class HasPermissionDirective implements OnInit {
  @Input('appHasPermission') public permissions?:
    | (keyof typeof Permission)[]
    | Permission[];

  constructor(
    private readonly _templateRef: TemplateRef<HTMLElement>,
    private readonly _viewContainer: ViewContainerRef,
    private readonly _userService: UserService,
  ) {}

  public ngOnInit(): void {
    this.permissions && this._userService.hasPermission(this.permissions)
      ? this._viewContainer.createEmbeddedView(this._templateRef)
      : this._viewContainer.clear();
  }
}
