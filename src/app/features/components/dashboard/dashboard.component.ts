import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PropertyService } from '../../service/property.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  properties: any[] = [];
  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {
    this.getProperties();
  }

  getProperties(): void {
    this.propertyService.getProperties().subscribe(
      (properties) => (this.properties = properties),

      (error) => console.error(error)
    );
  }
}
