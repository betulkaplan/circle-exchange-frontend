import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedInUserSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );
  isLoggedIn$ = this.loggedInUserSubject.asObservable();

  login(email: string, password: string): Observable<boolean> {
    // Simulate login logic
    if (true) {
      // Set the user as logged in
      console.log('True');
      this.loggedInUserSubject.next(true);
      // Return a resolved Observable with the login status
      return of(true);
    } else {
      this.loggedInUserSubject.next(true);
      // Return a rejected Observable with the login status
      return of(false);
    }
  }

  getIsLoggedInUser(): any {
    return this.loggedInUserSubject.value;
  }
}
