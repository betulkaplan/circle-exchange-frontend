import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthStorageService } from './auth-storage.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthInitializerService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  initializeApp(): Promise<any> {
    return this.http
      .get('http://localhost:8080/api/user/getAuthenticatedUser', {})
      .toPromise()
      .then((user: any) => {
        this.authService.setLoggedInUser(user);
      })
      .catch((error: any) => {
        console.error('Error fetching authenticated user:', error);
      });
  }
}
