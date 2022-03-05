import { Component, OnInit, HostListener } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';
import { Header } from 'src/app/helpers/header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerClasses: string = "";
  constructor(public header: Header, public scrollService: ScrollService) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  scroll() {
    this.headerClasses = this.header.getClasses();
  }
}
