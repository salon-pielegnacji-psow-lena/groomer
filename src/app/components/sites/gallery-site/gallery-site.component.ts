import { Component, AfterViewInit } from '@angular/core';
import { GalleryElement } from 'src/app/models/gallery-element';

@Component({
  selector: 'app-gallery-site',
  templateUrl: './gallery-site.component.html',
  styleUrls: ['./gallery-site.component.scss']
})
export class GallerySiteComponent implements AfterViewInit {

  popupShownGallerySalon = false;
  popupShownGalleryBeforeAfter = false;
  popupShownMetamorphosis = false;
  popupShownGalleryMetamorphosis = false;

  currentElement: number = 0;
  salonElements: GalleryElement[] = [];
  beforeAfterElements: GalleryElement[] = [];
  metamorphosisElements: GalleryElement[] = [];
  
  constructor() {
    this.initSalon();
    this.initBeforeAfter();
    this.initMetamorphosis();
  }
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {

  }
  showGallerySalon(i: number | null) {
    if (i) {
      this.currentElement = i;
    }
    this.popupShownGallerySalon = true;
  }
  showGalleryBeforeAfter(i: number | null) {
    if (i) {
      this.currentElement = i;
    }    
    this.popupShownGalleryBeforeAfter = true;
  }
  showGalleryMetamorphosis(i: number | null) {
    if (i) {
      this.currentElement = i;
    }    
    this.popupShownGalleryMetamorphosis = true;
  }
  initSalon() {
    for (let i = 1; i <= 6; i++) {
      this.salonElements.push(new GalleryElement("", [`assets/images/salon${i}.jpg`]));
    }
  }
  initBeforeAfter() {
    let photos = [114, 72];
    this.loadBeforeAfter(photos);
    photos = [116, 115];
    this.loadBeforeAfter(photos);
    photos = [91, 90];
    this.loadBeforeAfter(photos);
    photos = [92, 119];
    this.loadBeforeAfter(photos);
    photos = [107, 108];
    this.loadBeforeAfter(photos);
    photos = [112, 113];
    this.loadBeforeAfter(photos);
  } 
  private loadBeforeAfter(photos: number[]) {
    this.beforeAfterElements.push(new GalleryElement(`Przed i po`, [`assets/images/${photos[0]}.jpg`, `assets/images/${photos[1]}.jpg`]));
  }
  showMetamorphosis() {
    this.popupShownMetamorphosis = true;
  }
  initMetamorphosis() {
    this.metamorphosisElements.push(new GalleryElement(`York`, [`assets/images/metamorfozy/${16}.jpg`]));
    this.metamorphosisElements.push(new GalleryElement(`Inny`, [`assets/images/metamorfozy/${17}.jpg`]));
    this.metamorphosisElements.push(new GalleryElement(`Shitzu`, [`assets/images/metamorfozy/${18}.jpg`]));
    this.metamorphosisElements.push(new GalleryElement(`West`, [`assets/images/metamorfozy/${19}.jpg`]));
    this.metamorphosisElements.push(new GalleryElement(`Maltańczyk`, [`assets/images/metamorfozy/${20}.jpg`]));
    this.metamorphosisElements.push(new GalleryElement(``, [`assets/images/metamorfozy/${21}.jpg`]));
    this.metamorphosisElements.push(new GalleryElement(``, [`assets/images/metamorfozy/${22}.jpg`]));
    this.metamorphosisElements.push(new GalleryElement(``, [`assets/images/metamorfozy/${72}.jpg`]));
    this.metamorphosisElements.push(new GalleryElement(``, [`assets/images/metamorfozy/${88}.jpg`]));
    this.metamorphosisElements.push(new GalleryElement(``, [`assets/images/metamorfozy/${89}.jpg`]));
    this.metamorphosisElements.push(new GalleryElement(``, [`assets/images/metamorfozy/${90}.jpg`]));
    this.metamorphosisElements.push(new GalleryElement(``, [`assets/images/metamorfozy/${91}.jpg`]));
    this.metamorphosisElements.push(new GalleryElement(``, [`assets/images/metamorfozy/${92}.jpg`]));
    this.metamorphosisElements.push(new GalleryElement(``, [`assets/images/metamorfozy/${93}.jpg`]));
  }
}
