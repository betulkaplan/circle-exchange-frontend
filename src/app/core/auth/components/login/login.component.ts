import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  directToRegister() {
    this.router.navigate(['register']);
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;

    // Perform login logic using email and password
    this.authService.login(email, password).subscribe({
      next: () => {
        this.router.navigate(['/']); // Redirect to the home page or any other desired page
      },
      error: (error) => {
        console.log('Login failed:', error);
        // Display an error message to the user or perform any other error handling
      },
    });
  }
}
