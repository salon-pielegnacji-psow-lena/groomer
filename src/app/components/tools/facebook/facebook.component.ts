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
  //@Input() top: number = -1;
  @Input() class: string = "";
  constructor() {
    this.fontSize = 25;    
  }

  ngOnInit(): void {
  }
  getStyle() {    
    var style = `font-size: ${this.fontSize}px`;
    // if (this.top > -1) {
    //   style += `;top: ${this.top}px`;
    // }
    return style;
  }
  goToFacebook(): void {
    window.open(environment.facebook, '_blank');
  }
}