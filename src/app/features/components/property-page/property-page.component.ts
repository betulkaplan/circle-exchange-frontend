import { Component } from '@angular/core';
import { PropertyService } from '../../service/property.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property-page',
  templateUrl: './property-page.component.html',
  styleUrls: ['./property-page.component.css'],
})
export class PropertyPageComponent {
  propertyTitle: string = '';

  constructor(
    private propertySevice: PropertyService,
    private router: Router
  ) {}

  onSubmit(): void {
    // Perform property creation logic here
    console.log('Property title:', this.propertyTitle);
    this.propertySevice.createProperty(this.propertyTitle).subscribe(
      (res) => this.router.navigate(['']),
      (error) => console.log(error)
    );
  }
}
