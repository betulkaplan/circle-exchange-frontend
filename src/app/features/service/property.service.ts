import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  private apiUrl = 'http://localhost:8080/api/property';

  constructor(private http: HttpClient) {}

  getProperties(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
