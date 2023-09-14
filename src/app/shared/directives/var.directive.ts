import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[prjVar]',
})
export class VarDirective {
  @Input()
  public set prjVar(context: unknown) {
    this._context.$implicit = this._context.prjVar = context;

    if (!this._hasView) {
      this._vcRef.createEmbeddedView(this._templateRef, this._context);
      this._hasView = true;
    }
  }

  private readonly _context: {
    $implicit: unknown;
    prjVar: unknown;
  } = {
    $implicit: null,
    prjVar: null,
  };

  private _hasView: boolean = false;

  constructor(
    private readonly _templateRef: TemplateRef<unknown>,
    private readonly _vcRef: ViewContainerRef,
  ) {}
}
