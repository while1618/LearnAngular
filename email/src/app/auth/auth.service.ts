import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
  API_URL = 'https://api.angular-email.com/auth';

  constructor(private httpClient: HttpClient) {}

  usernameAvailable(username: string) {
    return this.httpClient.post<UsernameAvailableResponse>(
      `${this.API_URL}/username`,
      {
        username: username,
      }
    );
  }

  signUp(credentials: SignUpRequest) {
    return this.httpClient.post<SignUpResponse>(
      `${this.API_URL}/signup`,
      credentials
    );
  }
}
