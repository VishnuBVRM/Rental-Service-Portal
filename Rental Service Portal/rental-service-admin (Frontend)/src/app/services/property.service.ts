import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Property } from '../common/property';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http: HttpClient) { }

  //get all Property deatils
  getPropertyList(){
    const url = 'http://localhost:8181/api/properties';
    return this.http
    .get<GetResponseProperties>(url)
    .pipe(map((response) => response._embedded.properties));
  }

  //add property details
  createProperty(id:number, property:Property){
    const url = 'http://localhost:8181/api/v1/category/'+ id + '/properties';
    return this.http.post<Property>(url, property);
  }
}

  interface GetResponseProperties{
    _embedded: {
      properties: Property[];
    }
  }

