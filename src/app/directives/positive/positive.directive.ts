import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPositive]'
})
export class PositiveDirective {
  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    this.el.nativeElement.value = this.el.nativeElement.value.match(/^\d+/g);
  }
}
