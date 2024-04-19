import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appIsEdit]'
})
export class IsEditDirective {

  constructor(private elementRef: ElementRef) { 
    const loggedRole = localStorage.getItem('userRole');
    if(loggedRole == 'Admin') {
      this.elementRef.nativeElement.style.display = 'block';
    } else {
      this.elementRef.nativeElement.style.display = 'none';
    }
  }

}
