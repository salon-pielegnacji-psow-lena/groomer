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
  additionalInfo: string = "drobne kołtuny +20zł";

  constructor(public language: LanguageService, private routingService: RoutingService) { }

  ngOnInit(): void {
    this.cutting.push(new TableRow(2, [''], true, true));
    this.cutting.push(new TableRow(1, ['Yorkshire Terrier, YT Biewer', '140 zł'], false, false));
    this.cutting.push(new TableRow(2, [this.additionalInfo], true, true));
    this.cutting.push(new TableRow(1, ['Maltańczyk, Pudel Toy, Bolończyk', '150 zł'], false, false));
    this.cutting.push(new TableRow(2, [this.additionalInfo], true, true));
    this.cutting.push(new TableRow(1, ['Shih-Tzu, Hawańczyk, Bichon', '150 zł'], false, false));
    this.cutting.push(new TableRow(2, [this.additionalInfo], true, true));
    this.cutting.push(new TableRow(1, ['West Highland White Terrier, Pudel min. Coton de Tulear', '150 zł'], false, false));
    this.cutting.push(new TableRow(2, [this.additionalInfo], true, true));
    this.cutting.push(new TableRow(1, ['Szpic min. Pomeranian', '150 zł'], false, false));
    this.cutting.push(new TableRow(2, [this.additionalInfo], true, true));
    this.cutting.push(new TableRow(1, ['Sznaucer min. Foxterier', '150 zł'], false, false));
    this.cutting.push(new TableRow(2, [this.additionalInfo], true, true));
    this.cutting.push(new TableRow(1, ['Mix - Maltipoo, Yorkipoo, Malshi , Shihpoo itp.', '150 zł'], false, false));
    this.cutting.push(new TableRow(2, [this.additionalInfo], true, true));
    this.cutting.push(new TableRow(1, ['Mix - Cavapoo, Cockapoo', '160 zł'], false, false));
    this.cutting.push(new TableRow(2, [this.additionalInfo], true, true));
    this.cutting.push(new TableRow(1, ['Pudel średni', '160 zł'], false, false));
    this.cutting.push(new TableRow(2, [this.additionalInfo], true, true));
 
    this.modeling.push(new TableRow(2, [''], true, true));
    this.modeling.push(new TableRow(1, ['Cavalier King Charles Spaniel', '160 zł'], false, false));
    this.modeling.push(new TableRow(2, [this.additionalInfo], true, true));
    this.modeling.push(new TableRow(1, ['Jamnik szorstkowłosy (króliczy ,miniatura, standard)', ' 190 zł'], false, false));
    this.modeling.push(new TableRow(2, [this.additionalInfo], true, true));
    this.modeling.push(new TableRow(1, ['Jack Russell Terrier', '200 zł'], false, false));
    this.modeling.push(new TableRow(2, [this.additionalInfo], true, true));
    this.modeling.push(new TableRow(1, ['Sznaucer min.', '200 zł'], false, false));
    this.modeling.push(new TableRow(2, [this.additionalInfo], true, true));
    this.modeling.push(new TableRow(1, ['Cairn Terrier, Foxterier', '200 zł'], false, false));
    this.modeling.push(new TableRow(2, [this.additionalInfo], true, true));
    this.modeling.push(new TableRow(1, ['West Highland White Terrier, Terier Szkocki ', '200 zł'], false, false));
    this.modeling.push(new TableRow(2, [this.additionalInfo], true, true));

    this.other.push(new TableRow(2, [''], true, true));
    this.other.push(new TableRow(1, ['Kąpiel (z suszeniem i wyczesaniem)', '100 zł'], true, false));
    this.other.push(new TableRow(1, ['Kąpiel pieski mini (z suszeniem i wyczesaniem)', '90 zł'], true, false));
    this.other.push(new TableRow(1, ['Obcięcie pazurów', '20 zł'], true, false));
    this.other.push(new TableRow(1, ['Wyczesanie podszerstka', '80 zł/godz'], true, false));
    this.other.push(new TableRow(1, ['Rozczesanie skołtunionej sierści (dodatkowo płatne)', '120 zł/godz'], true, false));
    this.other.push(new TableRow(1, ['Golenie psa z filcu (dodatkowo płatne)', '+50% ceny podst'], true, false));
    this.other.push(new TableRow(1, ['Wyczesanie - drobne kołtuny', '+20zł do ceny podst'], true, false));

  }
  goToContact() {
    this.routingService.redirect('contact');
  }
}
