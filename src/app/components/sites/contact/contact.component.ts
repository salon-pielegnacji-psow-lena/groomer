import { Component, OnInit } from '@angular/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  faFacebook = faFacebook;
  constructor() { }

  ngOnInit(): void {
  }
  goToFacebook(): void {
    window.open(environment.facebook, '_blank');
  }
}
