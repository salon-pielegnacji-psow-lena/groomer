import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mcseLink: SafeUrl;
  mcsdLink: SafeUrl;
  mcsaSqlLink: SafeUrl;
  mcsaWebLink: SafeUrl;
  externalLinkSize: number = 128;
  faAngleDoubleDown = faAngleDoubleDown;

  constructor(public language: LanguageService, private sanitizer: DomSanitizer) {
    this.mcseLink = this.sanitizer.bypassSecurityTrustUrl("https://www.credly.com/badges/d57d2e8c-e945-413d-992a-ffa6d2a12e9b/public_url");
    this.mcsdLink = this.sanitizer.bypassSecurityTrustUrl("https://www.credly.com/badges/9bab9f59-c07d-4185-a2db-dea509a27cfe/public_url");
    this.mcsaSqlLink = this.sanitizer.bypassSecurityTrustUrl("https://www.credly.com/badges/75171728-0717-4b48-9d88-7b2504c57a84/public_url");
    this.mcsaWebLink = this.sanitizer.bypassSecurityTrustUrl("https://www.credly.com/badges/d10b1eb0-cf62-46c6-9e37-8ab8221a4360/public_url");
  }

  ngOnInit(): void {
  }

}
