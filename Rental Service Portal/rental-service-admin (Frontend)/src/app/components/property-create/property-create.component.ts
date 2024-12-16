import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PropertyCategory } from '../../common/property-category';
import { Router } from '@angular/router';
import { PropertyCategoryService } from '../../services/property-category.service';
import { PropertyService } from '../../services/property.service';
import { Property } from '../../common/property';

@Component({
  selector: 'app-property-create',
  standalone: false,

  templateUrl: './property-create.component.html',
  styleUrl: './property-create.component.css'
})
export class PropertyCreateComponent {
  propertyFormGroup: FormGroup
  propertyCategories: PropertyCategory[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private propertyService: PropertyService,
    private propertyCategoryService: PropertyCategoryService,
    private router: Router
  ){}

  ngOnInit(){
    this.propertyFormGroup = this.formBuilder.group({
      property: this.formBuilder.group({
          available: ['',[Validators.required]],
          securityDeposit: ['',[Validators.required]],
          price:['',[Validators.required]],
          areaOfProperty:['',[Validators.required]],
          imagesUrl:['',[Validators.required]],
          address:['',[Validators.required]],
          category:['',[Validators.required]],
      }),
    });

    this.listPropertyCategories();
  }

  get available(){
    return this.propertyFormGroup.get('property.available');
  }

  get securityDeposit(){
    return this.propertyFormGroup.get('property.securityDeposit');
  }

  get price(){
    return this.propertyFormGroup.get('property.price');
  }

  get areaOfProperty(){
    return this.propertyFormGroup.get('property.areaOfProperty');
  }

  get imagesUrl(){
    return this.propertyFormGroup.get('property.imagesUrl');
  }

  get address(){
    return this.propertyFormGroup.get('property.address');
  }

  get category(){
    return this.propertyFormGroup.get('property.category')
  }

  listPropertyCategories(){
    this.propertyCategoryService.getPropertyCategories().subscribe((data) => {
      this.propertyCategories = data;
      console.log(data)
    });
  }

  onSubmit(){
    if(this.propertyFormGroup.invalid){
      this.propertyFormGroup.markAllAsTouched();
      alert('Invalid Form');
      return;
    }

    //if form is valid
    let property = new Property();
    property = this.propertyFormGroup.controls['property'].value;

    this.propertyService
    .createProperty(property.category.id, property)
    .subscribe((data) => {
      alert('New property is added!');
      this.router.navigateByUrl('/property-list');
    });
  }

}
