import { Component } from '@angular/core';
import { Property } from '../../common/property';
import { PropertyService } from '../../services/property.service';

@Component({
  selector: 'app-property-list',
  standalone: false,

  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent {
  properties: Property[] = [];

  constructor(private propertyService: PropertyService) { }

  listProperties(){
    this.propertyService.getPropertyList().subscribe((data) => {
      this.properties= data;
      console.log(data);
    });
  }

  ngOnInit() {
    this.listProperties();
  }
}
