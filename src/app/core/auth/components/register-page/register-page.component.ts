import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    const { email, password } = this.registerForm.value;
    // Perform login logic using email and password
    this.authService.register(email, password).subscribe(
      (returnValue) => {
        console.log('Register successful', returnValue);
        this.router.navigate(['/']); // Redirect to the home page or any other desired page
      },
      (error) => {
        console.log('Register failed:', error);
        // Display an error message to the user or perform any other error handling
      }
    );
  }

  directToLogin() {}
}
