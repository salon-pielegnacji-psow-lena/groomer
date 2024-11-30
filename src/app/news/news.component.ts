import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  newsAccepted = 'lena_news_accepted';
  show: boolean = true;
  accepted: boolean = false;
  constructor() { }

  ngOnInit(): void {
    const accepted = localStorage.getItem(this.newsAccepted);
    if (accepted == "true") {
      this.show = false;
    }
  }
  accept() {
    this.show = false;
    localStorage.setItem(this.newsAccepted, `${this.accepted}`);
  }
  setAccepted() {
    this.accepted = !this.accepted;
  }
}
