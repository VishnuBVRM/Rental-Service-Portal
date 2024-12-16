import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyListComponent } from './components/property-list/property-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { PropertyCreateComponent } from './components/property-create/property-create.component';
import { PropertyCategoryListComponent } from './components/property-category-list/property-category-list.component';
import { PropertyCategoryCreateComponent } from './components/property-category-create/property-category-create.component';
import { PropertyCategoryEditComponent } from './components/property-category-edit/property-category-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyListComponent,
    PropertyCreateComponent,
    PropertyCategoryListComponent,
    PropertyCategoryCreateComponent,
    PropertyCategoryEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
