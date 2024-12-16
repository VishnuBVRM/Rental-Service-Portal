import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PropertyCategoryService } from '../../services/property-category.service';
import { Router } from '@angular/router';
import { PropertyCategory } from '../../common/property-category';

@Component({
  selector: 'app-property-category-create',
  standalone: false,

  templateUrl: './property-category-create.component.html',
  styleUrl: './property-category-create.component.css'
})
export class PropertyCategoryCreateComponent {
  categoryFormGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private propertyCategoryService: PropertyCategoryService,
    private router: Router){ }

    ngOnInit(){
      this.categoryFormGroup = this.formBuilder.group({
        category: this.formBuilder.group({
          categoryName: ['',[Validators.required, Validators.pattern('[a-zA-Z]+')],],
        }),
      });
    }

    get categoryName(){
      return this.categoryFormGroup.get('category.categoryName');
    }

    onSubmit(){
      if(this.categoryFormGroup.invalid) {
        this.categoryFormGroup.markAllAsTouched();
        alert('Inavlid From');
        return;
      }

      let propertyCategory =new PropertyCategory();
      propertyCategory = this.categoryFormGroup.controls['category'].value;
      
      console.log(propertyCategory);

      this.propertyCategoryService
      .createPropertyCategory(propertyCategory)
      .subscribe((data) => {
        alert('New Category is added!');
        this.router.navigateByUrl('/property-category-list');
      });
    }
}
