import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { ScrollService } from 'src/app/services/scroll.service';
import { ThemeService } from 'src/app/services/theme.service';
import { Header } from 'src/app/helpers/header';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  faBars = faBars;
  render = false;
  classes: string = "menu";
  constructor(public scrollService: ScrollService, public header: Header, public theme: ThemeService) {
    setTimeout(() => { this.render = true }, 50);
  }

  ngOnInit(): void {
  }
  
  ngDoCheck() {
    if (this.header.isShown()) {
      this.classes = "header-menu";
    }
    else {

    }
  }
}
