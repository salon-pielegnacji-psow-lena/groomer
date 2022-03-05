import { Component, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { Section } from 'src/app/models/section';
import { ScrollService } from 'src/app/services/scroll.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements AfterViewInit {

  @ViewChild('start') home!: ElementRef;
  @ViewChild('omnie') about!: ElementRef;
  @ViewChild('kontakt') contact!: ElementRef;
  @ViewChild('wiecej') more!: ElementRef;
  @ViewChild('oferta') offer!: ElementRef;
 
  timeOutFunctionId: any; 

  constructor(private route: ActivatedRoute, public scrollService: ScrollService, public theme: ThemeService) { }

  ngAfterViewInit(): void {
    this.scrollService.setSections([
      new Section('start', 'Start', this.home, ""),
      new Section('omnie', 'O mnie', this.about, "o-mnie.htm"),
      new Section('oferta', 'Oferta', this.offer, "oferta.htm"),
      new Section('wiecej', 'Więcej', this.more, "szkolenia.htm"),
      new Section('kontakt', 'Kontakt', this.contact, "kontakt.htm"),      
    ]);
    this.route.url.pipe(first()).subscribe(u => {
      this.scrollService.goToSection(u);
    });
  }

  @HostListener('window:scroll', ['$event.target']) onScroll(e: any) {
    this.scrollService.onScroll(e);
  }

  @HostListener('window:orientationchange', ['$event'])
  onOrientationChange() {
    clearTimeout(this.timeOutFunctionId);
    this.timeOutFunctionId = setTimeout(() => {
      this.ngAfterViewInit();
      this.scrollService.goToView('start', false);
    }, 100);
  }
}