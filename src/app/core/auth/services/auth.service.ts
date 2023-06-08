import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthStorageService } from './auth-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedInUserSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );
  loggedInUser$ = this.loggedInUserSubject.asObservable();

  constructor(
    private http: HttpClient,
    private authStorage: AuthStorageService,
    private router: Router
  ) {}

  login(email: string, password: string): Observable<any> {
    return this.http
      .post<any>('http://localhost:8080/api/v1/auth/authenticate', {
        email,
        password,
      })
      .pipe(
        tap((response: any) => {
          this.authStorage.setToken(response.token);
          this.loggedInUserSubject.next(response.user); // Update loggedInUser with the API response
          this.router.navigate(['/']);
        }),
        catchError((error: any) => {
          return of(error);
        })
      );
  }

  logout() {
    this.authStorage.removeToken();
    this.loggedInUserSubject.next(null);
  }

  getoggedInUser(): any {
    return this.loggedInUserSubject.value;
  }

  setLoggedInUser(user: any) {
    this.loggedInUserSubject.next(user);
  }
}
