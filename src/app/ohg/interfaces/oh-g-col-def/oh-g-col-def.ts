export interface OhGColDef {
  /**
   * Data
   */
  title: string;
  field: string;

  /**
   * Styles
   */
  styles?: any;

  /**
   * Dimensions
   */
  minWidth?: string;
  maxWidth?: string;
  fixedWidth?: string;

  /**
   * Alignments
   */
  textAlignment?: 'center' | 'right' | 'left';

  /**
   * Header
   */
  headerStyles?: any;
  headerClasses?: string;
}
