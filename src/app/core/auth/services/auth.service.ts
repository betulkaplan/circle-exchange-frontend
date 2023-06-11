import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, of, tap } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthStorageService } from './auth-storage.service';
import { LoginResponse } from 'types.model';

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
    private authStorage: AuthStorageService
  ) {}

  login(
    email: string,
    password: string
  ): Observable<LoginResponse | HttpErrorResponse> {
    return this.http
      .post<LoginResponse>('http://localhost:8080/api/v1/auth/authenticate', {
        email,
        password,
      })
      .pipe(
        tap((response: LoginResponse) => {
          this.authStorage.setToken(response.token);
          this.loggedInUserSubject.next(response.user); // Update loggedInUser with the API response
        }),
        catchError((error: HttpErrorResponse) => {
          return of(error);
        })
      );
  }
  register(email: string, password: string): Observable<any> {
    return this.http
      .post<any>('http://localhost:8080/api/v1/auth/register', {
        email,
        password,
      })
      .pipe(
        tap((response: any) => {
          this.authStorage.setToken(response.token);
          this.loggedInUserSubject.next(response.user); // Update loggedInUser with the API response
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
