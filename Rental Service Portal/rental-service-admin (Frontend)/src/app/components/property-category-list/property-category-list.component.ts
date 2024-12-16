import { Component } from '@angular/core';
import { PropertyCategory } from '../../common/property-category';
import { PropertyCategoryService } from '../../services/property-category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property-category-list',
  standalone: false,

  templateUrl: './property-category-list.component.html',
  styleUrl: './property-category-list.component.css'
})
export class PropertyCategoryListComponent {
  propertyCategories: PropertyCategory[] = []

  constructor(
    private propertyCategoryService: PropertyCategoryService,
    private router: Router
  ){ }

  listPropertyCategory(){
    this.propertyCategoryService.getPropertyCategories().subscribe((data) => {
      this.propertyCategories = data;
      console.log(data);
    });
  }

  ngOnInit(){
    this.listPropertyCategory();
  }

  removeCategory(id: number){
    if(confirm('Are you sure to delete?')){
      this.propertyCategoryService
       .deletePropertyCategory(id)
       .subscribe((data) => {
        alert('Category is removed!');
        this.listPropertyCategory();
  });
 }
}

showPropertyCategoryEdit(id: number){
  //alert("edit")
  this.router.navigate(['property-category-edit', id]);
}
}
