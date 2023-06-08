import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/auth/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  authenticated: boolean = false;
  private subscription: Subscription;
  constructor(private router: Router, private authService: AuthService) {
    this.subscription = this.authService.loggedInUser$.subscribe(
      (isLoggedIn) => (this.authenticated = !!isLoggedIn)
    );
  }

  navigateToPage(page: string): void {
    this.router.navigate([page]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
