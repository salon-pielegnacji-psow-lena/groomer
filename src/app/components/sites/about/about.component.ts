import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  popupShown = false;
  constructor(public scrollService: ScrollService) { }

  ngOnInit(): void {
  }

  showPopup() {
    this.popupShown = true;
  }
}
