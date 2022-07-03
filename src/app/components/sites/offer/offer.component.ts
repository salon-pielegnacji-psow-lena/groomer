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
    this.cutting.push(new TableRow(1, ['York, York Biewer', '110 - 120 zł']));
    this.cutting.push(new TableRow(1, ['Maltańczyk, Pudel Toy, Bolończyk', '120 - 130 zł']));
    this.cutting.push(new TableRow(1, ['Shih-Tzu, Hawańczyk, Maltipoo, Bichon', '130 - 140 zł']));
    this.cutting.push(new TableRow(1, ['West terrier, Coton de Tulear, Pudel min.', '130 - 140 zł']));
    this.cutting.push(new TableRow(1, ['Szpic min. Pomeranian', '130 - 140 zł']));
    this.cutting.push(new TableRow(1, ['Sznaucer min. Foxterier', '130 - 140 zł']));
    this.cutting.push(new TableRow(1, ['Cavapoo', '140 - 150 zł']));
    this.cutting.push(new TableRow(1, ['Pudel średni', 'od 150 zł']));

    this.modeling.push(new TableRow(1, ['Cavalier', '120 - 130 zł']));
    this.modeling.push(new TableRow(1, ['Jamnik szorstkowłosy', '140 - 160 zł']));
    this.modeling.push(new TableRow(1, ['Jack Russell Terrier', '150 - 160 zł']));
    this.modeling.push(new TableRow(1, ['Sznaucer min.', '150 - 160 zł']));
    this.modeling.push(new TableRow(1, ['Cairn Terrier, Foxterier', '170 - 190 zł']));
    this.modeling.push(new TableRow(1, ['West Terrier, Terier szkocki', '170 - 190 zł']));

    this.other.push(new TableRow(1, ['KĄPIEL', 'od 80 zł']));
    this.other.push(new TableRow(1, ['KĄPIEL pieski mini', 'od 70 zł']));
    this.other.push(new TableRow(1, ['Rozczesanie skołtunionej sierści', '80 zł/godz.']));
    this.other.push(new TableRow(1, ['Obcięcie pazurów', 'od 15 zł']));
  }
  goToContact(){
    this.routingService.redirect('contact');
  }

}
