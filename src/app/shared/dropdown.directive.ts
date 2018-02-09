import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isDropdownOpen = false;

  @HostListener('click') toggleOpen() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
