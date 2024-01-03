import {
  ViewContainerRef,
  TemplateRef,
  Directive,
  OnInit,
  inject,
  Input,
} from '@angular/core';
import { UserService } from '@shared/services';
import { Permission } from '@shared/enums';

@Directive({
  selector: '[appHasPermission]',
})
export class HasPermissionDirective implements OnInit {
  private readonly _viewContainer = inject(ViewContainerRef);
  private readonly _userService = inject(UserService);
  private readonly _templateRef = inject(TemplateRef<HTMLElement>);

  @Input('appHasPermission') public permissions?:
    | (keyof typeof Permission)[]
    | Permission[];

  public ngOnInit(): void {
    this.permissions && this._userService.hasPermission(this.permissions)
      ? this._viewContainer.createEmbeddedView(this._templateRef)
      : this._viewContainer.clear();
  }
}
