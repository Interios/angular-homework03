import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEven]'
})
export class EvenDirective {
  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    this.el.nativeElement.value = [...this.el.nativeElement.value].filter((el: number) => el % 2 == 0).join("");
  }
}
