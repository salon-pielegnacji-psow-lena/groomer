import { Component, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { RoutingService } from 'src/app/services/routing.service';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements AfterViewInit {

  @ViewChild('start') start!: ElementRef;
  @ViewChild('omnie') omnie!: ElementRef;
  @ViewChild('kontakt') kontakt!: ElementRef;
  @ViewChild('wiecej') wiecej!: ElementRef;
  @ViewChild('uslugi') uslugi!: ElementRef;
  @ViewChild('footer') footer!: ElementRef;

  constructor(private routingService: RoutingService, private scrollService: ScrollService) { }

  ngAfterViewInit(): void {
    this.routingService.replaceState();
    setTimeout(() => {
      this.routingService.resetHistoryCounter();
    }, 1000);
  }
  @HostListener('window:scroll', ['$event.target']) onScroll(e: any) {
    this.scrollService.onScroll(e);
  }
}
