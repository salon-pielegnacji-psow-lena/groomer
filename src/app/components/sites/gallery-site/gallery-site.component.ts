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
      this.beforeAfterElements.push(new GalleryElement(`Przed: ${i} i po: ${i}`, [`assets/images/przed${i}.jpg`, `assets/images/po${i}.jpg`]));
    }
  }
}
