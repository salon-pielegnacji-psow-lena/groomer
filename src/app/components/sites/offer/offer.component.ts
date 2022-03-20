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
    this.cutting.push(new TableRow(1, ['York mini', 'od 100 zł']));
    this.cutting.push(new TableRow(1, ['York, York Biewer, Maltańczyk mini', 'od 110 zł']));
    this.cutting.push(new TableRow(1, ['Maltańczyk, Pudel Toy, Bolończyk', 'od 120 zł']));
    this.cutting.push(new TableRow(1, ['Shih-Tzu, Hawańczyk, Maltipoo, Bichon', 'od 130 zł']));
    this.cutting.push(new TableRow(1, ['West terier, Coton de Tulaer, Pudel min.', 'od 130 zł']));
    this.cutting.push(new TableRow(1, ['Szpic min. Pomeranian', 'od 130 zł']));
    this.cutting.push(new TableRow(1, ['Sznaucer min. Foxterier', 'od 130 zł']));
    this.cutting.push(new TableRow(1, ['Cavapoo', 'od 140 zł']));
    this.cutting.push(new TableRow(1, ['Pudel średni', 'od 150 zł']));

    this.modeling.push(new TableRow(1, ['Cavalier', 'od 120 zł']));
    this.modeling.push(new TableRow(1, ['Jamnik szorstkowłosy', '140 - 160 zł']));
    this.modeling.push(new TableRow(1, ['Jack Russell Terier', '150 - 160 zł']));
    this.modeling.push(new TableRow(1, ['Sznaucer min.', '150 - 160 zł']));
    this.modeling.push(new TableRow(1, ['Cairn terier, Foxterier', '170 - 180 zł']));
    this.modeling.push(new TableRow(1, ['West terier, Terier szkocki', '170 - 180 zł']));

    this.other.push(new TableRow(1, ['KĄPIEL', 'od 70 zł']));
    this.other.push(new TableRow(1, ['KĄPIEL pieski mini', 'od 60 zł']));
    this.other.push(new TableRow(1, ['Rozczesanie skołtunionej sierści', '70 zł/godz.']));
  }
  goToContact(){
    this.routingService.redirect('contact');
  }

}
