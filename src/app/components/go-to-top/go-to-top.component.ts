import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { Header } from 'src/app/helpers/header';

@Component({
  selector: 'app-go-to-top',
  templateUrl: './go-to-top.component.html',
  styleUrls: ['./go-to-top.component.scss']
})
export class GoToTopComponent implements OnInit {
  faArrowCircleUp = faArrowCircleUp;
  constructor(private scrollService: ScrollService, public header: Header) { }

  ngOnInit(): void {
  }
  goTop() {
    this.scrollService.goToView('start');
  }
}
