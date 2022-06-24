import {Component, Input, OnInit} from '@angular/core';
import {OhGColDef} from '../interfaces/oh-g-col-def/oh-g-col-def';

@Component({
  selector: 'oh-grid',
  templateUrl: './oh-g.component.html',
  styleUrls: ['./oh-g.component.scss']
})
export class OhGComponent implements OnInit {
  @Input() columnDefs: OhGColDef[] | undefined;

  gridStyles: any;

  public object = Object;

  constructor() { }

  ngOnInit(): void {
    this.calculateColumnWidth();
  }

  private calculateColumnWidth() {
    const colDefsLength = this.columnDefs?.length ?? 0;
    const widthInPercent = 100 / colDefsLength;
    this.columnDefs = (this.columnDefs ?? []).map(col => {
      if (!col.minWidth && !col.maxWidth && !col.fixedWidth) {
        col.fixedWidth = widthInPercent + '%';
      }
      return col;
    });

  }

}
