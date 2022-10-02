import { Component, OnInit, HostListener } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { environment } from 'src/environments/environment';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerClasses: string = "";
  faFacebook = faFacebook;

  constructor(public header: HeaderService) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  scroll() {
    this.headerClasses = this.header.getClasses();
  }
  goToFacebook() {
    window.open(environment.facebook, '_blank');
  }
}
