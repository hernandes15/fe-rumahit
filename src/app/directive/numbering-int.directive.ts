import { Directive, ElementRef, HostListener, LOCALE_ID, Inject } from '@angular/core';
import { formatNumber, NumberFormatStyle, getLocaleNumberFormat} from '@angular/common';

@Directive({
  selector: '[numberingInt]'
})
export class NumberingIntDirective {

  private el: HTMLInputElement;

  constructor(
    private elementRef: ElementRef
    , @Inject(LOCALE_ID) protected localeId: string
  ) { 
    this.el = this.elementRef.nativeElement;
  }

  // ngOnInit() {
  //   // this.el.value = this.setToInt(this.el.value).toString();
  //   this.el.value = formatNumber(this.setToInt(this.el.value), this.localeId);
  // }

  @HostListener("focus", ["$event.target.value"])
  onFocus(value) {
    // asli
    // this.el.value = this.setToInt(value).toString();
    // end asli
    let numFormat = getLocaleNumberFormat(this.localeId, NumberFormatStyle.Decimal);
    let replaceDecimal = String(numFormat).replace(numFormat.substr(5,4),"");
    var regex = new RegExp(replaceDecimal[1], "g");
    this.el.value = String(value).replace(regex,"");
  }

  @HostListener("blur", ["$event.target.value"])
  onBlur(value) {
    this.el.value = formatNumber(this.setToInt(value), this.localeId);
  }

  private setToInt(val){

    if(val != ''){
      let value = parseInt(val);

      return Number.isNaN(value) ? 0 : value;
    }

    return val;
  }

}
