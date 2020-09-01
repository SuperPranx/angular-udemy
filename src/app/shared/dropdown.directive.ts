import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') toggleOpen = false;
  constructor(private elementRef: ElementRef) { }

  @HostListener('document:click', ['$event']) elementClicked(event: Event) {
    this.toggleOpen = this.elementRef.nativeElement.contains(event.target) ? !this.toggleOpen : false;
  }
}
