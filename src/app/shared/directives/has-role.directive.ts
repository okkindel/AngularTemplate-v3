import {
  ViewContainerRef,
  TemplateRef,
  Directive,
  OnInit,
  Input,
} from '@angular/core';
import { UserService } from '@shared/services';
import { Role } from '@shared/enums';

@Directive({
  selector: '[prjHasRole]',
})
export class HasRoleDirective implements OnInit {
  @Input() public prjHasRole?: Role[] | `${Role}`[] | '*';

  constructor(
    private readonly _templateRef: TemplateRef<HTMLElement>,
    private readonly _viewContainer: ViewContainerRef,
    private readonly _userService: UserService,
  ) {}

  public ngOnInit(): void {
    this.prjHasRole &&
    (this.prjHasRole === '*' || this._userService.hasRole(this.prjHasRole))
      ? this._viewContainer.createEmbeddedView(this._templateRef)
      : this._viewContainer.clear();
  }
}
