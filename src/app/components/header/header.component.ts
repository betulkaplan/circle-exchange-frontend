import { Component } from '@angular/core';
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
  constructor(private authService: AuthService) {
    this.subscription = this.authService.loggedInUser$.subscribe(
      (isLoggedIn) => (this.isUserLoggedIn = isLoggedIn)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
