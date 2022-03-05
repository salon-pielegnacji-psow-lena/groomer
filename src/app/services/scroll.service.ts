import { Injectable, Inject } from '@angular/core';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';
import { Section } from '../models/section';
import { DOCUMENT, Location } from '@angular/common';
import { Header } from '../helpers/header';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  private sections!: Section[];
  private currentUrl: string = "";
  public showHeader = false;
  public isScrolling = false;
  currentPosition: number = 0;
  constructor(private router: Router, public location: Location, private route: ActivatedRoute, private header: Header, @Inject(DOCUMENT) private document: Document) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
  }
 
  setScroll(enabled:boolean){
    this.document.body.style.overflow = enabled ? "" : "hidden";
  }
  setSections(sections: Section[]) {
    this.sections = sections;
  }

  getSections() {
    return this.sections;
  }

  isActive(fragment: string) {
    return this.currentUrl != "" ? this.currentUrl == fragment : "start" == fragment;
  }

  goToSection(url: UrlSegment[]) {
    if (url[0]) {
      this.isScrolling = true;      
      this.currentUrl = url[0].path;
      this.goToView(this.currentUrl);
    }
  }

  onScroll(e: any) {
    this.isScrolling = true;
    let currentSection = this.sections.find(a => a.startingPoint >= window.scrollY);   
    this.currentUrl = currentSection?.name!;
    this.toggleHeader(e);
    setTimeout(() => {      
      this.isScrolling = false;
    }, 500);    
    this.replaceState(currentSection?.name!);
  }

  toggleHeader(e: any) {
    let scroll = e.scrollingElement.scrollTop;
    let first = (window.innerHeight / 2);
    let second = window.innerHeight / 1.4;
    let down = scroll > this.currentPosition;
    let up = scroll < this.currentPosition;

    if (down && window.scrollY < first || up && window.scrollY < first) {
      this.header.showSlideDownAnimation = false;
      this.header.showSlideUpAnimation = false;
    }
    else if (down && window.scrollY > first && window.scrollY < second) {
      this.header.showSlideDownAnimation = true;
    }
    else if (up && window.scrollY > first && window.scrollY < second) {
      this.header.showSlideUpAnimation = true;
      this.header.showSlideDownAnimation = false;
    }
    else if (window.scrollY >= window.innerHeight / 2) {
      this.header.showSlideDownAnimation = true;
    }
    this.currentPosition = scroll;
  }

  goToView(url: string | null, smooth: boolean = true) {
    let targetElement = this.sections.find(a => a.name == url || a.oldUrl == url)?.element.nativeElement ?? this.sections[0].element.nativeElement;
    let behavior = { behavior: "smooth" }
    if (!smooth)
      behavior = { behavior: "auto" }
    targetElement.scrollIntoView(behavior);
    setTimeout(() => {
      this.replaceState(targetElement.name);   
    }, 1000);      
  }

  private replaceState(url: string) {
    if(url){
      this.location.replaceState('#' + url);
    }    
  }
}