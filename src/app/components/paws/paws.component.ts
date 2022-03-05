import { Component, OnInit, HostListener } from '@angular/core';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-paws',
  templateUrl: './paws.component.html',
  styleUrls: ['./paws.component.scss']
})
export class PawsComponent implements OnInit {

  faPaw = faPaw;
  prevOrientaiton = false;
  currentOrientaiton = false;
  paws: any[] = [];
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      for (let i = 0; i < 25; i++) {
        this.paws.push(`top:${Math.floor(Math.random() * document.body.clientHeight - 100) + 1}px; left: ${Math.floor(Math.random() * 25) + 1}vw; transform: rotate(${Math.floor(Math.random() * 359) + 1}deg);`);
      }
      for (let i = 25; i < 50; i++) {
        this.paws.push(`top:${Math.floor(Math.random() * document.body.clientHeight - 100) + 1}px; left: ${Math.floor(Math.random() * 20) + 70}vw; transform: rotate(${Math.floor(Math.random() * 359) + 1}deg);`);
      }
    }, 400);
  }

  @HostListener('window:orientationchange', ['$event'])
  onOrientationChange() {
    this.currentOrientaiton = !this.currentOrientaiton;
  }
  ngDoCheck() {
    if (this.currentOrientaiton != this.prevOrientaiton) {
      this.paws = [];
      this.ngOnInit();
      this.prevOrientaiton = this.currentOrientaiton;
    }
  }
}
