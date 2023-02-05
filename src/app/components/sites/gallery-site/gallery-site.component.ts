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
    for (let i = 101; i <= 111; i++) {
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
    for (let i = 0; i <= 18; i++) {
      this.addMetamorphosis(i, `Maltańczyki`, `assets/images/metamorfozy/1_maltanczyk/`, this.MaltanczykElements);     
    }

    for (let i = 0; i <= 19; i++) {
      this.addMetamorphosis(i, `Shih Tzu`, `assets/images/metamorfozy/2_shih_tzu/`, this.ShihTzuElements);      
    }
    
    for (let i = 0; i <= 16; i++) {
      this.addMetamorphosis(i, `Yorkshire Terriery`, `assets/images/metamorfozy/3_york/`, this.YorkElements);      
    }
    
    for (let i = 0; i <= 5; i++) {
      this.addMetamorphosis(i, `YT Biewery`, `assets/images/metamorfozy/3_york_biewer/`, this.YorkBiewerElements);   
    }
  
    for (let i = 0; i <= 2; i++) {
      this.addMetamorphosis(i, `Hawańczyki`, `assets/images/metamorfozy/4_hawanczyk/`, this.HawanczykElements);   
    }
  
    for (let i = 0; i <= 3; i++) {
      this.addMetamorphosis(i, `Bichony`, `assets/images/metamorfozy/5_bichon/`, this.BichonElements);   
    }
  
    for (let i = 0; i <= 1; i++) {
      this.addMetamorphosis(i, `Bolonki`, `assets/images/metamorfozy/6_bolonka/`, this.BolonkaElements);   
    }
  
    for (let i = 0; i <= 3; i++) {
      this.addMetamorphosis(i, `Mixy Maltipoo`, `assets/images/metamorfozy/7_maltipoo/`, this.MaltipooElements);   
    }
  
    for (let i = 0; i <= 1; i++) {
      this.addMetamorphosis(i, `Coton De Tulear`, `assets/images/metamorfozy/8_coton_de_tuler/`, this.CotonDeTulerElements);   
    }

    for (let i = 0; i <= 7; i++) {
      this.addMetamorphosis(i, `Pomeraniany`, `assets/images/metamorfozy/9_pomeranian/`, this.PomeranianElements);   
    }
   
    for (let i = 0; i <= 1; i++) {
      this.addMetamorphosis(i, `Chińske Grzywacze`, `assets/images/metamorfozy/10_chinski_grzywacz/`, this.ChinskiGrzywaczElements); 
    }

    for (let i = 0; i <= 3; i++) {
      this.addMetamorphosis(i, `Cavaliery`, `assets/images/metamorfozy/11_cavalier/`, this.CavalierElements);   
    }
   
    for (let i = 0; i <= 7; i++) {
      this.addMetamorphosis(i, `West White Terriery`, `assets/images/metamorfozy/12_west/`, this.WestElements); 
    }

    for (let i = 0; i <= 5; i++) {
      this.addMetamorphosis(i, `Sznaucery min`, `assets/images/metamorfozy/13_sznaucer_min/`, this.SznaucerMinElements);  
    }
    
    for (let i = 0; i <= 2; i++) {
      this.addMetamorphosis(i, `Cairn Terriery`, `assets/images/metamorfozy/14_cair_terier/`, this.CairTerierElements);
    }
    
    for (let i = 0; i <= 2; i++) {
      this.addMetamorphosis(i, `JRT`, `assets/images/metamorfozy/15_JRT/`, this.JRTElements);   
    }
  
    for (let i = 0; i <= 1; i++) {
      this.addMetamorphosis(i, `Jamniki Szrostkowłose`, `assets/images/metamorfozy/16_jamnik_szorstkowlosy/`, this.JamnikSzrostkowlosyElements);  
    }
    
    for (let i = 0; i <= 1; i++) {
      this.addMetamorphosis(i, `Border Terriery`, `assets/images/metamorfozy/17_border_terier/`, this.BorderTerierElements);   
    }
    
    for (let i = 0; i <= 2; i++) {
      this.addMetamorphosis(i, `Owczarki Szetlandzkie`, `assets/images/metamorfozy/18_owczarek_szetlandzki/`, this.OwczarekSzetlandzkiElements);  
    }
   
    for (let i = 0; i <= 1; i++) {
      this.addMetamorphosis(i, `Papillony`, `assets/images/metamorfozy/19_papillon/`, this.PapillonElements);  
    }
   
    for (let i = 0; i <= 1; i++) {
      this.addMetamorphosis(i, `Pudle`, `assets/images/metamorfozy/20_pudel/`, this.PudelElements);   
    }
  }
  addMetamorphosis(i: number, name: string, images: string, concreteArray: GalleryElement[]) {
    if (i == 0) {
      this.metamorphosisElements.push(new GalleryElement(name, [`${images}${i}.webp`]));
    }
    else {
      concreteArray.push(new GalleryElement(name, [`${images}${i}.webp`]));
    }
  }
}
