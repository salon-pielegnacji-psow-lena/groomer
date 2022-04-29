import { Component, AfterViewInit } from '@angular/core';
import { GalleryElement } from 'src/app/models/gallery-element';
import { ScrollService } from 'src/app/services/scroll.service';

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
  currentMetamorphosisElements: GalleryElement[] = [];

  MaltanczykElements: GalleryElement[] = [];
  ShihTzuElements: GalleryElement[] = [];
  YorkElements: GalleryElement[] = [];
  YorkBiewerElements: GalleryElement[] = [];
  HawanczykElements: GalleryElement[] = [];
  BichonElements: GalleryElement[] = [];
  BolonkaElements: GalleryElement[] = [];
  MaltipooElements: GalleryElement[] = [];
  CotonDeTulerElements: GalleryElement[] = [];
  PomeranianElements: GalleryElement[] = [];
  ChinskiGrzywaczElements: GalleryElement[] = [];
  CavalierElements: GalleryElement[] = [];
  WestElements: GalleryElement[] = [];
  SznaucerMinElements: GalleryElement[] = [];
  CairTerierElements: GalleryElement[] = [];
  JRTElements: GalleryElement[] = [];
  JamnikSzrostkowlosyElements: GalleryElement[] = [];
  BorderTerierElements: GalleryElement[] = [];
  OwczarekSzetlandzkiElements: GalleryElement[] = [];
  PapillonElements: GalleryElement[] = [];
  PudelElements: GalleryElement[] = [];

  shownGalleryMetamorphosis: boolean = false;

  constructor(private scrollService: ScrollService) {
    this.initSalon();
    this.initBeforeAfter();
    this.initMetamorphosis();
  }
  ngAfterViewInit(): void {

  }

  showGallerySalon() {
    this.currentElement = 0;
    this.popupShownGallerySalon = true;
  }
  showGalleryBeforeAfter() {
    this.currentElement = 0;    
    this.popupShownGalleryBeforeAfter = true;
  }
  toggleGalleryMetamorphosis() {
    this.shownGalleryMetamorphosis = !this.shownGalleryMetamorphosis;
    if (this.shownGalleryMetamorphosis) {
      this.scrollService.scrollToElement('metamorphosis');
    }
  }
  showConcreteGalleryMetamorphosis(name: string) {
    this.currentElement = 0;
    this.currentMetamorphosisElements = [];
    switch (name) {
      case "MaltanczykElements":
        this.currentMetamorphosisElements = this.MaltanczykElements;
        break;
      case "ShihTzuElements":
        this.currentMetamorphosisElements = this.ShihTzuElements;
        break;
      case "YorkElements":
        this.currentMetamorphosisElements = this.YorkElements;
        break;
      case "YorkBiewerElements":
        this.currentMetamorphosisElements = this.YorkBiewerElements;
        break;
      case "HawanczykElements":
        this.currentMetamorphosisElements = this.HawanczykElements;
        break;
      case "BichonElements":
        this.currentMetamorphosisElements = this.BichonElements;
        break;
      case "BolonkaElements":
        this.currentMetamorphosisElements = this.BolonkaElements;
        break;
      case "MaltipooElements":
        this.currentMetamorphosisElements = this.MaltipooElements;
        break;
      case "CotonDeTulerElements":
        this.currentMetamorphosisElements = this.CotonDeTulerElements;
        break;
      case "PomeranianElements":
        this.currentMetamorphosisElements = this.PomeranianElements;
        break;
      case "ChinskiGrzywaczElements":
        this.currentMetamorphosisElements = this.ChinskiGrzywaczElements;
        break;
      case "CavalierElements":
        this.currentMetamorphosisElements = this.CavalierElements;
        break;
      case "WestElements":
        this.currentMetamorphosisElements = this.WestElements;
        break;
      case "SznaucerMinElements":
        this.currentMetamorphosisElements = this.SznaucerMinElements;
        break;
      case "CairTerierElements":
        this.currentMetamorphosisElements = this.CairTerierElements;
        break;
      case "JRTElements":
        this.currentMetamorphosisElements = this.JRTElements;
        break;
      case "JamnikSzrostkowlosyElements":
        this.currentMetamorphosisElements = this.JamnikSzrostkowlosyElements;
        break;
      case "BorderTerierElements":
        this.currentMetamorphosisElements = this.BorderTerierElements;
        break;
      case "OwczarekSzetlandzkiElements":
        this.currentMetamorphosisElements = this.OwczarekSzetlandzkiElements;
        break;
      case "PapillonElements":
        this.currentMetamorphosisElements = this.PapillonElements;
        break;
      case "PudelElements":
        this.currentMetamorphosisElements = this.PudelElements;
        break;
    }    
    this.popupShownGalleryMetamorphosis = true;    
  }
  initSalon() {
    for (let i = 1; i <= 6; i++) {
      this.salonElements.push(new GalleryElement("", [`assets/images/salon/salon${i}.jpg`]));
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
    photos = [1008, 1009];
    this.loadBeforeAfter(photos);
  }
  private loadBeforeAfter(photos: number[]) {
    this.beforeAfterElements.push(new GalleryElement(`Przed i po`, [`assets/images/przedpo/${photos[0]}.jpg`, `assets/images/przedpo/${photos[1]}.jpg`]));
  }
  showMetamorphosis() {
    this.popupShownMetamorphosis = true;
  }
  initMetamorphosis() {
    for (let i = 1; i <= 18; i++) {
      this.MaltanczykElements.push(new GalleryElement(`Maltańczyk`, [`assets/images/metamorfozy/1_maltanczyk/${i}.webp`]));
    }
    for (let i = 1; i <= 19; i++) {
      this.ShihTzuElements.push(new GalleryElement(`Shih Tzu`, [`assets/images/metamorfozy/2_shih_tzu/${i}.webp`]));
    }
    for (let i = 1; i <= 14; i++) {
      this.YorkElements.push(new GalleryElement(`Yorkshire Terrier`, [`assets/images/metamorfozy/3_york/${i}.webp`]));
    }
    for (let i = 1; i <= 5; i++) {
      this.YorkBiewerElements.push(new GalleryElement(`York Biewer`, [`assets/images/metamorfozy/3_york_biewer/${i}.webp`]));
    }
    for (let i = 1; i <= 2; i++) {
      this.HawanczykElements.push(new GalleryElement(`Hawańczyk`, [`assets/images/metamorfozy/4_hawanczyk/${i}.webp`]));
    }
    for (let i = 1; i <= 3; i++) {
      this.BichonElements.push(new GalleryElement(`Bichon`, [`assets/images/metamorfozy/5_bichon/${i}.webp`]));
    }
    for (let i = 1; i <= 1; i++) {
      this.BolonkaElements.push(new GalleryElement(`Bolonka`, [`assets/images/metamorfozy/6_bolonka/${i}.webp`]));
    }
    for (let i = 1; i <= 2; i++) {
      this.MaltipooElements.push(new GalleryElement(`Maltipoo`, [`assets/images/metamorfozy/7_maltipoo/${i}.webp`]));
    }
    for (let i = 1; i <= 1; i++) {
      this.CotonDeTulerElements.push(new GalleryElement(`Coton De Tulear`, [`assets/images/metamorfozy/8_coton_de_tuler/${i}.webp`]));
    }
    for (let i = 1; i <= 7; i++) {
      this.PomeranianElements.push(new GalleryElement(`Pomeranian`, [`assets/images/metamorfozy/9_pomeranian/${i}.webp`]));
    }
    for (let i = 1; i <= 1; i++) {
      this.ChinskiGrzywaczElements.push(new GalleryElement(`Chiński Grzywacz`, [`assets/images/metamorfozy/10_chinski_grzywacz/${i}.webp`]));
    }
    for (let i = 1; i <= 3; i++) {
      this.CavalierElements.push(new GalleryElement(`Cavalier`, [`assets/images/metamorfozy/11_cavalier/${i}.webp`]));
    }
    for (let i = 1; i <= 7; i++) {
      this.WestElements.push(new GalleryElement(`West White Terrier`, [`assets/images/metamorfozy/12_west/${i}.webp`]));
    }
    for (let i = 1; i <= 4; i++) {
      this.SznaucerMinElements.push(new GalleryElement(`Sznaucer min`, [`assets/images/metamorfozy/13_sznaucer_min/${i}.webp`]));
    }
    for (let i = 1; i <= 2; i++) {
      this.CairTerierElements.push(new GalleryElement(`Cairn Terrier`, [`assets/images/metamorfozy/14_cair_terier/${i}.webp`]));
    }
    for (let i = 1; i <= 2; i++) {
      this.JRTElements.push(new GalleryElement(`JRT`, [`assets/images/metamorfozy/15_JRT/${i}.webp`]));
    }
    for (let i = 1; i <= 1; i++) {
      this.JamnikSzrostkowlosyElements.push(new GalleryElement(`Jamnik Szrostkowłosy`, [`assets/images/metamorfozy/16_jamnik_szorstkowlosy/${i}.webp`]));
    }
    for (let i = 1; i <= 1; i++) {
      this.BorderTerierElements.push(new GalleryElement(`Border Terrier`, [`assets/images/metamorfozy/17_border_terier/${i}.webp`]));
    }
    for (let i = 1; i <= 2; i++) {
      this.OwczarekSzetlandzkiElements.push(new GalleryElement(`Owczarek Szetlandzki`, [`assets/images/metamorfozy/18_owczarek_szetlandzki/${i}.webp`]));
    }
    for (let i = 1; i <= 1; i++) {
      this.PapillonElements.push(new GalleryElement(`Papillon`, [`assets/images/metamorfozy/19_papillon/${i}.webp`]));
    }
    for (let i = 1; i <= 1; i++) {
      this.PudelElements.push(new GalleryElement(`Pudel`, [`assets/images/metamorfozy/20_pudel/${i}.webp`]));
    }
  }
}
