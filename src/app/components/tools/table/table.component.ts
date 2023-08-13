import { Component, Input, OnInit } from '@angular/core';
import { TableRow } from 'src/app/models/table-row';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() headers: any[] = [];  
  @Input() rows: TableRow[] = [];
  @Input() border = false;
  @Input() firstTdClass = "";
  @Input() lastTdClass = "";
  classes: string = "table ";
  rowClasses: string = "";

  constructor() { }

  ngOnInit(): void {
    if (this.border){
      this.classes += "border"
    }
  }
  getTdClasses(row: TableRow, td: any) {
    const border = row.border ? ' border-tr' : '';
    const small = row.small ? ' small' : '';
    this.rowClasses += border;
    if (td == row.data[0] && row.data.length > 1 ){
      return `${this.firstTdClass} ${small}`;
    }
    if (td == row.data[row.data.length - 1]){
      return `${this.lastTdClass} ${small}`;
    }
    return small;
  }
}
