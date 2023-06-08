import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isUserLoggedIn: any;
  private subscription: Subscription;
  constructor(private authService: AuthService, private router: Router) {
    this.subscription = this.authService.loggedInUser$.subscribe(
      (isLoggedIn) => (this.isUserLoggedIn = isLoggedIn)
    );
  }

  onLogout(): void {
    this.authService.logout();
  }
  toLogin(): void {
    this.router.navigate(['login']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
