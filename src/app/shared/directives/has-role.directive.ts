import {
  ViewContainerRef,
  TemplateRef,
  Directive,
  OnInit,
  inject,
  Input,
} from '@angular/core';
import { UserService } from '@shared/services';
import { Role } from '@shared/enums';

@Directive({
  selector: '[appHasRole]',
})
export class HasRoleDirective implements OnInit {
  private readonly _viewContainer = inject(ViewContainerRef);
  private readonly _userService = inject(UserService);
  private readonly _templateRef = inject(TemplateRef<HTMLElement>);

  @Input('appHasRole') public roles?: (keyof typeof Role)[] | Role[];

  public ngOnInit(): void {
    this.roles && this._userService.hasRole(this.roles)
      ? this._viewContainer.createEmbeddedView(this._templateRef)
      : this._viewContainer.clear();
  }
}
