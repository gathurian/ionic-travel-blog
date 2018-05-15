export interface iBlog{
  id?: string;

  //Preview Data
  title?: string;
  abstract?: string;
  previewImage?: string;
  date?: string;

  content?: string[];

  //Sichtbarkeit
  draftFlag?: boolean; //Blog noch nicht fertig gestellt
  publicFlag?: boolean; //Visible für alle oder nicht
  visibleFor?: string[]; //Visible für bestimmte Personen
}
