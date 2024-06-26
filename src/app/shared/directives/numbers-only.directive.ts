import { Directive , ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appNumbersOnly]'
})
export class NumbersOnlyDirective {

  constructor(private el: ElementRef) { 
    debugger;
    console.log("appNumbersOnly")
  }

  @HostListener('input', ['$event'])
  onInputChange(event: Event) {
    console.log('chnage')
    const initialValue = this.el.nativeElement.value; 
    this.el.nativeElement.value = initialValue.replace(/[^0-9]*/g, '');
    // if (initialValue !== this.el.nativeElement.value) {
    //   event.stopPropagation();
    // }
  }

}
