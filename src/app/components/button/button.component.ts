import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() buttonClass: string = "button ";
  @Input() isBig: boolean = false;
  @Output() onClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    if (this.isBig){
      this.buttonClass = this.buttonClass + "button-big"
    }
  }

  onClickEvent(e:any) {   
    this.onClick.emit(e);
  }
}
