import { Pipe, PipeTransform } from '@angular/core';
import {OhGColDef} from '../../../interfaces/oh-g-col-def/oh-g-col-def';

@Pipe({
  name: 'ohGGridHeaderStyles'
})
export class OhGGridHeaderStylesPipe implements PipeTransform {

  transform(col: OhGColDef, ...args: any[]): any {
    return Object.assign(
      this.fetchDefaultStyles(),
      this.fetchColDimensions(col),
      this.fetchColHeaderStyles(col)
    );
  }

  private fetchDefaultStyles() {
    return {
      borderRight: '3px solid #6b7378',
      paddingLeft: '10px',
      paddingRight: '10px',
      fontWeight: 'bolder'
    };
  }

  private fetchColDimensions(col: OhGColDef) {
    return {
      minWidth: col.minWidth,
      maxWidth: col.maxWidth,
      width: col.fixedWidth,
      textAlign: col.textAlignment
    };
  }

  private fetchColHeaderStyles(col: OhGColDef) {
    return col.headerStyles ?? {};
  }
}
