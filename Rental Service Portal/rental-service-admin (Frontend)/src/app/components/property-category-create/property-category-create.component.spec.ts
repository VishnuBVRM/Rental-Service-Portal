import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyCategoryCreateComponent } from './property-category-create.component';

describe('PropertyCategoryCreateComponent', () => {
  let component: PropertyCategoryCreateComponent;
  let fixture: ComponentFixture<PropertyCategoryCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropertyCategoryCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyCategoryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
