export interface iBlogComponent{
  id?: string;
  layout?: number; //Layout-Flag: 1,2,oder 3

  //Data
  text?: string;
  image?: string;
  imageSubtitle?: string;

  //Location
  name?: string;
  place?: string;
  country?: string;
}
