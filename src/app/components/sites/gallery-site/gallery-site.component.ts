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
    photos = [1000, 94];
    this.loadBeforeAfter(photos);
    photos = [1001, 1002];
    this.loadBeforeAfter(photos);
    photos = [1003, 1004];
    this.loadBeforeAfter(photos);
    photos = [1005, 93];
    this.loadBeforeAfter(photos);
    photos = [1006, 1007];
    this.loadBeforeAfter(photos);
  } 
  private loadBeforeAfter(photos: number[]) {
    this.beforeAfterElements.push(new GalleryElement(`Przed i po`, [`assets/images/${photos[0]}.jpg`, `assets/images/${photos[1]}.jpg`]));
  }
  showMetamorphosis() {
    this.popupShownMetamorphosis = true;
  }
  initMetamorphosis() {
    for (let i = 1; i <= 18; i++) {
      this.metamorphosisElements.push(new GalleryElement(`Maltańczyk`, [`assets/images/metamorfozy/1_maltanczyk/${i}.jpg`]));
    }
    for (let i = 1; i <= 20; i++) {
      this.metamorphosisElements.push(new GalleryElement(`Shih Tzu`, [`assets/images/metamorfozy/2_shih_tzu/${i}.jpg`]));
    }
    for (let i = 1; i <= 18; i++) {
      this.metamorphosisElements.push(new GalleryElement(`York`, [`assets/images/metamorfozy/3_york/${i}.jpg`]));
    }
    for (let i = 1; i <= 5; i++) {
      this.metamorphosisElements.push(new GalleryElement(`York Biewer`, [`assets/images/metamorfozy/3_york_biewer/${i}.jpg`]));
    }
    for (let i = 1; i <= 2; i++) {
      this.metamorphosisElements.push(new GalleryElement(`Hawańczyk`, [`assets/images/metamorfozy/4_hawanczyk/${i}.jpg`]));
    }
    for (let i = 1; i <= 1; i++) {
      this.metamorphosisElements.push(new GalleryElement(`Bichon`, [`assets/images/metamorfozy/5_bichon/${i}.jpg`]));
    }
    for (let i = 1; i <= 1; i++) {
      this.metamorphosisElements.push(new GalleryElement(`Bolonka`, [`assets/images/metamorfozy/6_bolonka/${i}.jpg`]));
    }
    for (let i = 1; i <= 2; i++) {
      this.metamorphosisElements.push(new GalleryElement(`Maltipoo`, [`assets/images/metamorfozy/7_maltipoo/${i}.jpg`]));
    }
    for (let i = 1; i <= 1; i++) {
      this.metamorphosisElements.push(new GalleryElement(`Coton de tuler`, [`assets/images/metamorfozy/8_coton_de_tuler/${i}.jpg`]));
    }
    for (let i = 1; i <= 7; i++) {
      this.metamorphosisElements.push(new GalleryElement(`Pomeranian`, [`assets/images/metamorfozy/9_pomeranian/${i}.jpg`]));
    }
    for (let i = 1; i <= 1; i++) {
      this.metamorphosisElements.push(new GalleryElement(`Chiński grzywacz`, [`assets/images/metamorfozy/10_chinski_grzywacz/${i}.jpg`]));
    }
    for (let i = 1; i <= 3; i++) {
      this.metamorphosisElements.push(new GalleryElement(`Cavalier`, [`assets/images/metamorfozy/11_cavalier/${i}.jpg`]));
    }
    for (let i = 1; i <= 7; i++) {
      this.metamorphosisElements.push(new GalleryElement(`West`, [`assets/images/metamorfozy/12_west/${i}.jpg`]));
    }
    for (let i = 1; i <= 3; i++) {
      this.metamorphosisElements.push(new GalleryElement(`Sznaucer min`, [`assets/images/metamorfozy/13_sznaucer_min/${i}.jpg`]));
    }
    for (let i = 1; i <= 2; i++) {
      this.metamorphosisElements.push(new GalleryElement(`Cair Terier`, [`assets/images/metamorfozy/14_cair_terier/${i}.jpg`]));
    }
    for (let i = 1; i <= 1; i++) {
      this.metamorphosisElements.push(new GalleryElement(`JRT`, [`assets/images/metamorfozy/15_JRT/${i}.jpg`]));
    }
    for (let i = 1; i <= 1; i++) {
      this.metamorphosisElements.push(new GalleryElement(`Jamnik Szrostkowłosy`, [`assets/images/metamorfozy/16_jamnik_szorstkowlosy/${i}.jpg`]));
    }
    for (let i = 1; i <= 1; i++) {
      this.metamorphosisElements.push(new GalleryElement(`Border terier`, [`assets/images/metamorfozy/17_border_terier/${i}.jpg`]));
    }
    for (let i = 1; i <= 1; i++) {
      this.metamorphosisElements.push(new GalleryElement(`Owczarek Szetlandzki`, [`assets/images/metamorfozy/18_owczarek_szetlandzki/${i}.jpg`]));
    }
  }
}
