import { Component, OnInit } from '@angular/core';
import { GalleryElement } from 'src/app/models/gallery-element';

@Component({
  selector: 'app-gallery-site',
  templateUrl: './gallery-site.component.html',
  styleUrls: ['./gallery-site.component.scss']
})
export class GallerySiteComponent implements OnInit {

  popupShownGallerySalon = false;
  popupShownGalleryBeforeAfter = false;
  salonElements: GalleryElement[] = [];
  beforeAfterElements: GalleryElement[] = [];

  constructor() { }

  ngOnInit(): void {
    this.initSalon();
    this.initBeforeAfter();
  }
  showGallerySalon() {
    this.popupShownGallerySalon = true;
  }
  showGalleryBeforeAfter() {
    this.popupShownGalleryBeforeAfter = true;
  }
  initSalon() {
    for (let i = 1; i <= 6; i++) {
      this.salonElements.push(new GalleryElement(i.toString(), [`assets/images/salon${i}.jpg`]));
    }
  }
  initBeforeAfter() {
    for (let i = 1; i <= 6; i++) {
      this.beforeAfterElements.push(new GalleryElement(`Przed i po`, [`assets/images/przed${i}.jpg`, `assets/images/po${i}.jpg`]));
    }
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
}
