import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyCategoryEditComponent } from './property-category-edit.component';

describe('PropertyCategoryEditComponent', () => {
  let component: PropertyCategoryEditComponent;
  let fixture: ComponentFixture<PropertyCategoryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropertyCategoryEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
