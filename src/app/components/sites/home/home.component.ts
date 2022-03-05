import { Component, OnInit } from '@angular/core';
import { Header } from 'src/app/helpers/header';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faAngleDoubleDown = faAngleDoubleDown;
  
  constructor(public header: Header) { }

  ngOnInit(): void {
  }
}
