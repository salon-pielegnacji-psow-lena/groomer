import { Injectable, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DOCUMENT, Location } from '@angular/common';
import { LayoutComponent } from '../components/layout/layout/layout.component';
import { RouterComponent } from '../components/router/router.component';
import { ScrollService } from './scroll.service';
import { Section } from '../models/section';
import { environment } from 'src/environments/environment';
import { faHome, faMailBulk, faHandshake, faFemale, faDog, faCamera} from '@fortawesome/free-solid-svg-icons';
import { first } from 'rxjs/operators';
import { HeaderService } from './header.service';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  public static routes = [
    { path: "start", component: LayoutComponent, section: new Section("start", "galeria"), types: [environment.HEADER, environment.HOME], faIcon: faHome },
    { path: "galeria", component: LayoutComponent, section: new Section("galeria", "omnie"), types: [environment.HEADER, environment.HOME], faIcon: faCamera },
    { path: "omnie", component: LayoutComponent, section: new Section("omnie", "oferta"), types: [environment.HEADER, environment.HOME], faIcon: faFemale },    
    { path: "oferta", component: LayoutComponent, section: new Section("oferta", "wiecej"), types: [environment.HEADER, environment.HOME], faIcon: faHandshake },
    { path: "wiecej", component: LayoutComponent, section: new Section("wiecej", "kontakt"), types: [environment.HEADER, environment.HOME], faIcon: faDog },
    { path: "kontakt", component: LayoutComponent, section: new Section("kontakt", "footer"), types: [environment.HEADER, environment.HOME], faIcon: faMailBulk },
    { path: "", component: RouterComponent, section: new Section("", "") },
    { path: "**", component: RouterComponent, section: new Section("404", "404") },
  ];

  currentRoute = RoutingService.routes.find(r => r.path == "");
  currentUrl = "";

  constructor(private router: Router, private header: HeaderService, public location: Location, @Inject(DOCUMENT) private document: Document, private scrollService: ScrollService) { }

  redirect(fragment: string | null) {
    let route = RoutingService.routes.find(r => r.path == fragment);
    let url = RoutingService.routes[0].path;
    if (route) {
      url = route?.path;
    }
    this.currentUrl = url;
    if (route?.component != this.currentRoute?.component){
      this.router.navigateByUrl(url);
      this.currentRoute = route;
    }  
    setTimeout(() => {
      try {
        this.scrollService.scrollToView(url, true)
      }
      finally {
        this.replaceState();
      }
    }, 10);
  }
  replaceState() {
    this.location.replaceState(`#${this.currentUrl}`);
  }
}
