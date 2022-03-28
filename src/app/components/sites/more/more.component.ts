import { Component, OnInit } from '@angular/core';
import { GalleryElement } from 'src/app/models/gallery-element';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss']
})
export class MoreComponent implements OnInit {

  popupShownInformation = false;
  popupShownAdvices = false;
  popupShownQualifications = false;

  qualificationElements: GalleryElement[] = [];

  constructor() {
    this.initQualifications();
  }

  ngOnInit(): void {
  }
  showInformation() {
    this.popupShownInformation = true;
  }
  showAdvices() {
    this.popupShownAdvices = true;
  }
  showQualifications() {
    this.popupShownQualifications = true;
  }

  initQualifications() {
    this.qualificationElements.push(new GalleryElement(`6 czerwca 2013 roku zdałam państwowy egzamin przed Komisją Izby Rzemieślniczej oraz 
      Małej i Średniej Przedsiebierczości w Katowicach. Uzyskałam tytuł MISTRZA w zawodzie GROOMER - FRYZJER ZWIERZĄT 😊`
      , [`assets/images/kwalifikacje1.jpg`]));
    this.qualificationElements.push(new GalleryElement(`6 czerwca 2013 roku zdałam państwowy egzamin przed Komisją Izby Rzemieślniczej oraz 
      Małej i Średniej Przedsiebierczości w Katowicach. Uzyskałam tytuł MISTRZA w zawodzie GROOMER - FRYZJER ZWIERZĄT 😊`
      , [`assets/images/kwalifikacje2.jpg`]));
    this.qualificationElements.push(new GalleryElement(`30 Maja 2009 roku powstało POLSKIE STOWARZYSZENIE GROOMERÓW (PSG), jestem jednym z członków założycieli PSG.`
      , [`assets/images/psg.jpg`]));
    this.qualificationElements.push(new GalleryElement(`Szkolenie BOBIK`
      , [`assets/images/bobik.jpg`]));
    this.qualificationElements.push(new GalleryElement(`21 Listopada 2009r odbyły się Warsztaty, gdzie gośćmi którzy udzielali wielu cennych rad byli prezes 
      Europejskiego Stowarzyszenia Groomerów, pan Umberto Lehmann (Włochy), oraz laureatka wielu prestiżowych nagród w  dziedzinie groomingu - pani Romana Divisova (Czechy). 
      Podczas warsztatów uczestnicy wykazywali się swoimi umiejętnościami w  pielęgnacji wybranej przez siebie rasy, ja trymowałam welsh teriera. 
      22 Listopada 2009r odbyło się Seminarium prowadzone przez pana Umberto Lehmanna. Pierwsza część dotyczyła pielęgnacji West Highland White Terier'a, 
      natomiast druga część poświęcona była Spanielowi Angielskiemu.`
      , [`assets/images/psg2.jpg`]));
    this.qualificationElements.push(new GalleryElement(`17 lipca 2010 uczestniczyłam w Katowicach, w Seminarium prowadzonym przez Panią Magdalenę Świetoń, 
      które poswięcone było pielęgnacji Yorkshire Terriera. Przedstawiona była specyfika rasy, jak prawidłowo pielęgnować Yorka od szczeniaczka do seniora, 
      jak dobrać odpowiednie kosmetyki, używać odpowiednich narzędzi, rozpoznawać gatunki włosa występujące w rasie, oraz przedstawione były różne techniki pielęgnacji. 
      W tym dniu uczestniczyłam również w seminarium z zakresu materiałoznawstwa i wykorzystania sprzętu prowadzonego przez Prezesa PSG Pana Bogusława Widerę.`
      , [`assets/images/psg3.jpg`]));
    this.qualificationElements.push(new GalleryElement(`18 lipca 2010 w Katowicach brałam udział w Konkursie strzyżenia Yorkshire Terriera, 
      organizowanym przez Polskie Stowarzyszenie Groomerów (PSG)
      Zajęłam w nim I miejsce 😊`
      , [`assets/images/psg4.jpg`, `assets/images/konkurs1.jpg`]));
    this.qualificationElements.push(new GalleryElement(`18 lipca 2010 w Katowicach brałam udział w Konkursie strzyżenia Yorkshire Terriera, 
      organizowanym przez Polskie Stowarzyszenie Groomerów (PSG)
      Zajęłam w nim I miejsce 😊`
      , [`assets/images/konkurs2.jpg`, `assets/images/konkurs3.jpg`]));
    this.qualificationElements.push(new GalleryElement(`Rok 2013 - Maj - Seminarium z modelowania i pracy nożyczkami na przykładzie Pudla i Bichona, 
      prowadzone przez znakomitą belgijską groomerkę Corine Verschuren.`
      , [`assets/images/modelowanie.jpg`]));
    this.qualificationElements.push(new GalleryElement(`Rok 2014 - Marzec - Seminarium Groomerskie "Trymowanie ras: sznaucer średni i cocker spaniel angielski". 
      Seminarium prowadził włoski groomer, sędzia międzynarodowy w groomingu - ROBERTO SALVATORI 😊`
      , [`assets/images/seminarium.jpg`]));
    this.qualificationElements.push(new GalleryElement(``, [`assets/images/certyfikat060520.jpg`]));
    this.qualificationElements.push(new GalleryElement(``, [`assets/images/certyfikat120520.jpg`]));
    this.qualificationElements.push(new GalleryElement(``, [`assets/images/certyfikat140321.jpg`]));
  }
}
