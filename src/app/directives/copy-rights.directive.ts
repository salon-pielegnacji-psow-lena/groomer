import { Directive, ElementRef  } from '@angular/core';

@Directive({
  selector: '[copyRights]'
})
export class CopyRightsDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.innerHTML = '©Salon Pielęgnacji Psów Lena Beata Zdrowak Bielsko-Biała, ul. Żywiecka 23B';
    let classes = this.el.nativeElement.getAttribute('class');
    this.el.nativeElement.setAttribute('class', `${classes} copy-rights noselect`);
 }
}
