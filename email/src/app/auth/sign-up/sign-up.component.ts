import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatchPassword } from '../validators/match-password';
import { UniqueUsername } from '../validators/unique-username';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  signUpForm = new FormGroup(
    {
      username: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
          Validators.pattern(/^[a-zA-Z0-9]+$/),
        ],
        [this.uniqueUsername.validate]
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
      passwordConfirmation: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
    },
    { validators: [this.matchPassword.validate] }
  );

  constructor(
    private matchPassword: MatchPassword,
    private uniqueUsername: UniqueUsername,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.signUpForm.invalid) return;
    this.authService.signUp(this.signUpForm.value).subscribe({
      next: () => {
        this.router.navigateByUrl('/inbox');
      },
      error: () => {
        this.signUpForm.setErrors({ unknownError: true });
      },
    });
  }
}
