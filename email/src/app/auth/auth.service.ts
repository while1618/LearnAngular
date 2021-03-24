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

interface CheckAuthResponse {
  authenticated: boolean;
  username: string;
}

interface SignInRequest {
  username: string;
  password: string;
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
      .post<SignUpResponse>(`${AuthService.API_URL}/signup`, credentials, {
        withCredentials: true,
      })
      .pipe(
        tap(() => {
          this.signedIn$.next(true);
        })
      );
  }

  checkAuth() {
    return this.httpClient
      .get<CheckAuthResponse>(`${AuthService.API_URL}/signedin`, {
        withCredentials: true,
      })
      .pipe(
        tap(({ authenticated }) => {
          if (authenticated) this.signedIn$.next(true);
        })
      );
  }

  signOut() {
    return this.httpClient.post(`${AuthService.API_URL}/signout`, {}).pipe(
      tap(() => {
        this.signedIn$.next(false);
      })
    );
  }

  signIn(credentials: SignInRequest) {
    return this.httpClient
      .post(`${AuthService.API_URL}/signin`, credentials)
      .pipe(
        tap(() => {
          this.signedIn$.next(true);
        })
      );
  }
}
