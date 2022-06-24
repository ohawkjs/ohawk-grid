import {Component, OnInit} from '@angular/core';
import {OhGColDef} from './ohg/interfaces/oh-g-col-def/oh-g-col-def';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'oh-grid';

  colDefs: OhGColDef[] = [
    {
      title: 'Col A',
      field: 'colA',
      minWidth: '100px',
      textAlignment: 'center'
    },
    {
      title: 'Col B',
      field: 'colB'
    },
    {
      title: 'Col C',
      field: 'colC'
    },
    {
      title: 'Col D',
      field: 'colD'
    }
  ];

  ngOnInit(): void {
  }

}
