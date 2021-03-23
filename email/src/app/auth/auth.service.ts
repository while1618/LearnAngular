import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

interface UsernameAvailableResponse {
  available: boolean;
}

interface SignUpRequest {
  username: string;
  password: string;
  passwordConfirmation: string;
}

interface SignUpResponse {
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private static API_URL = 'https://api.angular-email.com/auth';

  signedIn$ = new BehaviorSubject(false);

  constructor(private httpClient: HttpClient) {}

  usernameAvailable(username: string) {
    return this.httpClient.post<UsernameAvailableResponse>(
      `${AuthService.API_URL}/username`,
      {
        username: username,
      }
    );
  }

  signUp(credentials: SignUpRequest) {
    return this.httpClient
      .post<SignUpResponse>(`${AuthService.API_URL}/signup`, credentials)
      .pipe(
        tap(() => {
          this.signedIn$.next(true);
        })
      );
  }
}
