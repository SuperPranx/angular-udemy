import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input('appUnless') set unless(condition: boolean) {
    if (!condition) {
      this.viewCotainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewCotainerRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>,
              private viewCotainerRef: ViewContainerRef) { }

}
