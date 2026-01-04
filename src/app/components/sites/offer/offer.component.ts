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
    this.cutting.push(new TableRow(1, ['Yorkshire Terrier, YT Biewer', '170 zł'], false, false));
    this.cutting.push(new TableRow(2, [this.additionalInfo], true, true));
    this.cutting.push(new TableRow(1, ['Maltańczyk, Pudel Toy, Bolończyk', '180 zł'], false, false));
    this.cutting.push(new TableRow(2, [this.additionalInfo], true, true));
    this.cutting.push(new TableRow(1, ['Shih-Tzu, Hawańczyk, Maltipoo', '180 zł'], false, false));
    this.cutting.push(new TableRow(2, [this.additionalInfo], true, true));
    this.cutting.push(new TableRow(1, ['Shih-Tzu > 8kg, Lhasa apso, Coton de Tulear, Bichon, Pudel min. mix poo', '190 zł'], false, false));
    this.cutting.push(new TableRow(2, [this.additionalInfo], true, true));
    this.cutting.push(new TableRow(1, ['West Highland White Terrier, Sznaucer min., Foxterier', '180 zł'], false, false));
    this.cutting.push(new TableRow(2, [this.additionalInfo], true, true));
    this.cutting.push(new TableRow(1, ['Pomeranian, Szpic min. (korekta szaty)', '180 zł'], false, false));
    this.cutting.push(new TableRow(2, [this.additionalInfo], true, true));
    this.cutting.push(new TableRow(1, ['Pudel średni, Mix- Cavapoo, Cockapoo, Shihpoo itp.', '200 zł'], false, false));
    this.cutting.push(new TableRow(2, [this.additionalInfo], true, true));
    this.cutting.push(new TableRow(1, ['Pieski mini < 2kg - mini York, Chihuahua długowłosa itp.', '160 zł'], false, false));
    this.cutting.push(new TableRow(2, [this.additionalInfo], true, true));
    this.cutting.push(new TableRow(1, ['Owczarek szetlandzki < 10kg oraz podobne (kąpiel, wyczesanie ,kosm.)', 'od 200 zł'], false, false));
    this.cutting.push(new TableRow(2, [this.additionalInfo], true, true));
    this.cutting.push(new TableRow(1, ['Strzyżenie w fryzurce ASIAN STYLE (dodatkowo płatne)', '+20 zł'], false, false));
    this.cutting.push(new TableRow(2, [''], true, true));
    this.cutting.push(new TableRow(1, ['Kąpiel w ozonowanej wodzie (dodatkowo płatne)', '+20 zł'], false, false));
 
    this.modeling.push(new TableRow(2, [''], true, true));
    this.modeling.push(new TableRow(1, ['Cavalier King Charles Spaniel (+drobna korekta szaty)', '180 zł'], false, false));
    this.modeling.push(new TableRow(2, [this.additionalInfo], true, true));
    this.modeling.push(new TableRow(1, ['Jamnik szorstkowłosy (miniatura, standard)', ' 200-220 zł'], false, false));
    this.modeling.push(new TableRow(2, [this.additionalInfo], true, true));
    this.modeling.push(new TableRow(1, ['Jack Russell Terrier (krótki-złamany-szorstki)', '180-230-250 zł'], false, false));
    this.modeling.push(new TableRow(2, [''], true, true));
    this.modeling.push(new TableRow(1, ['Sznaucer min., Terier Szkocki', '250 zł'], false, false));
    this.modeling.push(new TableRow(2, [this.additionalInfo], true, true));
    this.modeling.push(new TableRow(1, ['West Highland White Terrier, Cairn Terrier, Foxterier', '280 zł'], false, false));
    this.modeling.push(new TableRow(2, [this.additionalInfo], true, true));

    this.other.push(new TableRow(2, [''], true, true));
    this.other.push(new TableRow(1, ['Kąpiel (z suszeniem i wyczesaniem)', 'od 120 zł'], true, false));
    this.other.push(new TableRow(1, ['Kąpiel pieski krótkowłose, zależnie od wagi (suszenie + wyczesanie martwej sierści, kosm.)', '< 4g od 120 zł, < 8kg od 150 zł'], true, false));
    this.other.push(new TableRow(1, ['Kąpiel w ozonowanej wodzie (dodatkowo płatne)', '+20 zł do usługi'], true, false));
    this.other.push(new TableRow(1, ['Obcięcie pazurów', '30 zł'], true, false));
    this.other.push(new TableRow(1, ['Wyczesanie podszerstka', '100 zł/godz'], true, false));
    this.other.push(new TableRow(1, ['Rozczesanie skołtunionej sierści (dodatkowo płatne)', '+30 zł / 15 min'], true, false));
    this.other.push(new TableRow(1, ['Golenie psa z filcu (dodatkowo płatne)', '+50% ceny podst'], true, false));
    this.other.push(new TableRow(1, ['Wyczesanie - drobne kołtuny', '+20 zł do ceny podst'], true, false));

  }
  goToContact() {
    this.routingService.redirect('contact');
  }
}
