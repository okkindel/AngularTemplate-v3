import {
  ViewContainerRef,
  TemplateRef,
  Directive,
  OnInit,
  Input,
} from '@angular/core';

import { UserService } from '../services';
import { Role } from '../enums';

@Directive({
  selector: '[appHasRole]',
})
export class HasRoleDirective implements OnInit {
  @Input('appHasRole') public roles?: `${Role}`[] | Role[];

  constructor(
    private readonly _templateRef: TemplateRef<HTMLElement>,
    private readonly _viewContainer: ViewContainerRef,
    private readonly _userService: UserService,
  ) {}

  public ngOnInit(): void {
    this.roles && this._userService.hasRole(this.roles)
      ? this._viewContainer.createEmbeddedView(this._templateRef)
      : this._viewContainer.clear();
  }
}
