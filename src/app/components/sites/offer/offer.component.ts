import { Component, OnInit } from '@angular/core';
import { TableRow } from 'src/app/models/table-row';
import { LanguageService } from 'src/app/services/language.service';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  cutting: TableRow[] = [];
  modeling: TableRow[] = [];
  other: TableRow[] = [];

  constructor(public language: LanguageService, private routingService: RoutingService) { }

  ngOnInit(): void {
    this.cutting.push(new TableRow(1, ['Yorkshire Terrier, YT Biewer', '120 - 130 zł']));
    this.cutting.push(new TableRow(1, ['Maltańczyk, Pudel Toy, Bolończyk', '130 - 140 zł']));
    this.cutting.push(new TableRow(1, ['Shih-Tzu, Hawańczyk, Bichon', '140 - 150 zł']));
    this.cutting.push(new TableRow(1, ['West Highland White Terrier, Pudel min. Coton de Tulear', '140 - 150 zł']));
    this.cutting.push(new TableRow(1, ['Szpic min. Pomeranian', '140 - 150 zł']));
    this.cutting.push(new TableRow(1, ['Sznaucer min. Foxterier', '140 - 150 zł']));
    this.cutting.push(new TableRow(1, ['Mix - Maltipoo, Yorkipoo, Malshi , Shihpoo itp.', '130 - 150 zł']));
    this.cutting.push(new TableRow(1, ['Mix - Cavapoo, Cockapoo', '150 - 160 zł']));//
    this.cutting.push(new TableRow(1, ['Pudel średni', 'od 160 zł']));
    this.cutting.push(new TableRow(1, ['Drobne kołtuny', '+20 zł']));

    this.modeling.push(new TableRow(1, ['Cavalier King Charles Spaniel', '130 - 140 zł']));
    this.modeling.push(new TableRow(1, ['Jamnik szorstkowłosy (króliczy ,miniatura, standard)', '160 - 170 zł']));
    this.modeling.push(new TableRow(1, ['Jack Russell Terrier', '170 - 180 zł']));
    this.modeling.push(new TableRow(1, ['Sznaucer min.', '160 - 180 zł']));
    this.modeling.push(new TableRow(1, ['Cairn Terrier, Foxterier', '180 - 190 zł']));
    this.modeling.push(new TableRow(1, ['West Highland White Terrier, Terier Szkocki ', '180 - 200 zł']));
    this.modeling.push(new TableRow(1, ['Drobne kołtuny', '+20 zł']));

    this.other.push(new TableRow(1, ['Kąpiel (z suszeniem i wyczesaniem)', 'od 90 zł']));
    this.other.push(new TableRow(1, ['Kąpiel pieski mini (z suszeniem i wyczesaniem)', 'od 80 zł']));
    this.other.push(new TableRow(1, ['Obcięcie pazurów', '20 zł']));
    this.other.push(new TableRow(1, ['Wyczesanie podszerstka', '80 zł/godz']));
    this.other.push(new TableRow(1, ['Rozczesanie skołtunionej sierści (dodatkowo płatne)', '100 zł/godz']));
    this.other.push(new TableRow(1, ['Golenie psa z filcu (dodatkowo płatne)', '+50% ceny podst']));
    this.other.push(new TableRow(1, ['Wyczesanie - drobne kołtuny', '+20zł do ceny podst']));
    
  }
  goToContact(){
    this.routingService.redirect('contact');
  }

}
