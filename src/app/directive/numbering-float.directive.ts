import { Directive, HostListener, ElementRef, LOCALE_ID, Inject } from '@angular/core';
import { formatNumber, NumberFormatStyle, getLocaleNumberFormat } from '@angular/common';

@Directive({
  selector: '[numberingFloat]'
})
export class NumberingFloatDirective {

  private el: HTMLInputElement;
  

  constructor(
    private elementRef: ElementRef
    , @Inject(LOCALE_ID) protected localeId: string
  ) { 
    this.el = this.elementRef.nativeElement;
  }

  // ngOnInit() {
  //   //this.el.value = this.setToFloat(this.el.value).toString();
  //   // this._decimalPipe.transform(this.setToFloat(this.el.value),"1.2-2");
  //   this.el.value = formatNumber(this.setToFloat(this.el.value), this.localeId, "1.2-2");
  //   console.log('hit init')
  //   // this.el.value = this._decimalPipe.transform(this.el.value,"1.2-2");
  // }

  @HostListener("focus", ["$event.target.value"])
  onFocus(value) {
    // asli
    // this.el.value = this.setToFloat(value).toString();
    // end asli
    let numFormat = getLocaleNumberFormat(this.localeId, NumberFormatStyle.Decimal);
    var regex = new RegExp(numFormat[1], "g");
    this.el.value = String(value).replace(regex,"");
  }

  @HostListener("blur", ["$event.target.value"])
  onBlur(value) {
    // asli
    // this.el.value = this.setToFloat(value).toString();
    // end asli
    this.el.value = formatNumber(this.setToFloat(value), this.localeId, "1.2-2147483647");
  }

  private setToFloat(val){

    if(val != ''){
      let value = parseFloat(val);

      return Number.isNaN(value) ? 0 : value;
    }

    return val;
  }


}
