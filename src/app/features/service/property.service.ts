import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  private apiUrl = 'http://localhost:8080/api/property';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getProperties(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createProperty(title: string): Observable<any> {
    const currentUser = this.authService.getoggedInUser();
    return this.http.post<string>(this.apiUrl, {
      title,
      owner: currentUser.id,
    });
  }
}
