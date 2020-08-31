import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') toggleOpen = false;
  constructor() { }

  @HostListener('click') elementClicked() {
    this.toggleOpen = !this.toggleOpen;
  }
}
