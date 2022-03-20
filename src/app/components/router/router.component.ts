import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.scss']
})
export class RouterComponent implements AfterViewInit {

  constructor(private route: ActivatedRoute, private routingService: RoutingService) { 
    this.redirect();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.redirect();
    }, 1000);    
  }  
  redirect() {
    this.route.fragment.pipe(first()).subscribe(f => {
      this.routingService.redirect(f);
    });
  }
  ngDoCheck(){
    setTimeout(() => {
      location.href = '/groomer';
    }, 1000); 
  }
}