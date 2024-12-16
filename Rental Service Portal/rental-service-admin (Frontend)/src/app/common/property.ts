import { PropertyCategory } from "./property-category";

export class Property {
  id:number;
  available:string;
  securityDeposit:number;
  price:number;
  areaOfProperty:string;
  imagesUrl:string;
  address:string;
  category:PropertyCategory
}
