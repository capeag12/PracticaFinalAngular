import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBtnOver]'
})
export class BtnOverDirective {
  @HostBinding('class.over') encima:boolean = false
  
  constructor(private el:ElementRef) { }

  @HostListener('mouseover') onMouseOver(){
    this.encima=true;
  }

  @HostListener('mouseout') onMouseOut(){
    this.encima=false;
  }

}
