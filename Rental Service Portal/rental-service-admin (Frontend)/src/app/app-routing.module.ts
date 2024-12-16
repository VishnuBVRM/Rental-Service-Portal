import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyListComponent } from './components/property-list/property-list.component';
import { PropertyCreateComponent } from './components/property-create/property-create.component';
import { PropertyCategoryListComponent } from './components/property-category-list/property-category-list.component';
import { PropertyCategoryCreateComponent } from './components/property-category-create/property-category-create.component';
import { PropertyCategoryEditComponent } from './components/property-category-edit/property-category-edit.component';

const routes: Routes = [
  {path: 'property-list', component: PropertyListComponent},
  {path: 'property-create', component: PropertyCreateComponent},
  {path: 'property-category-list', component: PropertyCategoryListComponent},
  {path: 'property-category-create', component: PropertyCategoryCreateComponent},
  {path: 'property-category-edit/:id', component: PropertyCategoryEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
