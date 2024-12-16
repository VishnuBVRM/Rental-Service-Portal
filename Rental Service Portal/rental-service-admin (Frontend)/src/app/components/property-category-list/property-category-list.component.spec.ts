import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyCategoryListComponent } from './property-category-list.component';

describe('PropertyCategoryListComponent', () => {
  let component: PropertyCategoryListComponent;
  let fixture: ComponentFixture<PropertyCategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropertyCategoryListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
