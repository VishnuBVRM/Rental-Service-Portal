import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyCategory } from '../../common/property-category';
import { PropertyCategoryService } from '../../services/property-category.service';


@Component({
  selector: 'app-property-category-edit',
  standalone: false,

  templateUrl: './property-category-edit.component.html',
  styleUrl: './property-category-edit.component.css'
})
export class PropertyCategoryEditComponent {
  categoryFormGroup: FormGroup;
  propertyCategory: PropertyCategory = new PropertyCategory();
  id: number;


  constructor(
    private formBuilder: FormBuilder,
    private propertyCategoryService: PropertyCategoryService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){ }


  ngOnInit(){
    this.categoryFormGroup = this.formBuilder.group({
      category: this.formBuilder.group({
        categoryName: ['',[Validators.required, Validators.pattern('[a-zA-Z]+')]],
      }),
    });


    //read id given in propertyCategoryEditComponent route
    this.id = this.activatedRoute.snapshot.params['id']


    this.propertyCategoryService.getPropertyCategory(this.id)
    .subscribe((data) => {
      this.propertyCategory = data;
      console.log(this.propertyCategory);
    })
  }

  get categoryName(){
return this.categoryFormGroup.get('Category.categoryName');
  }

  onSubmit(){
    if(this.categoryFormGroup.invalid){
      this.categoryFormGroup.markAllAsTouched();
      alert('Invalid Form');
      return;
    }

    if (confirm('Are you sure to update?')){

      this.propertyCategoryService.updatePropertyCategory(this.id, this.propertyCategory).subscribe((data) => {
        alert("Product details are updated!");
        this.router.navigateByUrl('/property-category-list');

      });
    }

  }
}
