import { Component, Input, OnInit } from '@angular/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.scss']
})
export class FacebookComponent implements OnInit {

  faFacebook = faFacebook;
  @Input() fontSize: number; 
  constructor() {
    this.fontSize = 30;
  }

  ngOnInit(): void {
  }
  getStyle() {    
    return `font-size: ${this.fontSize}px`;
  }
  goToFacebook(): void {
    window.open(environment.facebook, '_blank');
  }
}
