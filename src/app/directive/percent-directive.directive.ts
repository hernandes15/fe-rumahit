import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';
import { PercentPipePipe } from '../pipe/percent-pipe.pipe';

@Directive({
  selector: '[percentDirective]'
})
export class PercentDirectiveDirective implements OnInit {

  private el: HTMLInputElement;

  constructor(
    private elementRef: ElementRef,
    private pipe: PercentPipePipe
  ) { 
    this.el = this.elementRef.nativeElement;
  }

  ngOnInit() {    
    this.el.value = this.pipe.transform(this.el.value);
  }


  @HostListener("focus", ["$event.target.value"])
  onFocus(value) {
    this.el.value = this.pipe.transform(value);
  }

  @HostListener("blur", ["$event.target.value"])
  onBlur(value) {
    this.el.value = this.pipe.transform(value);
  }
}
