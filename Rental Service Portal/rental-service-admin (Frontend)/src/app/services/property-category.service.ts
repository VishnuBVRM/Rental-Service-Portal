import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { PropertyCategory } from '../common/property-category';

@Injectable({
  providedIn: 'root'
})
export class PropertyCategoryService {

  constructor(private http: HttpClient) { }

  getPropertyCategories(){

    //http://localhost:8080/api/property-category

    const url = 'http://localhost:8181/api/property-category';
    return this.http
    .get<GetResonsePropertyCategory>(url)
    .pipe(map((response) => response._embedded.propertyCategory));
  }

  createPropertyCategory(propertyCategory: PropertyCategory){
    const url = 'http://localhost:8181/api/property-category';
    return this.http.post<PropertyCategory>(url, propertyCategory);
  }

  deletePropertyCategory(id: number){
    const url = 'http://localhost:8181/api/property-category/' + id;
    return this.http.delete<PropertyCategory>(url);
  }

  getPropertyCategory(id: number){
    const url = 'http://localhost:8181/api/property-category/' + id;
    return this.http.get<PropertyCategory>(url);
  }

  updatePropertyCategory(id: number, propertyCategory: PropertyCategory){
    const url = 'http://localhost:8181/api/property-category/' + id;
    return this.http.put<PropertyCategory>(url, propertyCategory);
  }
}

interface GetResonsePropertyCategory{
  _embedded: {
    propertyCategory: PropertyCategory[];
  };
}
