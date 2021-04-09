import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface EmailsResponse {
  id: string;
  subject: string;
  from: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private static API_URL = 'https://api.angular-email.com';

  constructor(private httpClient: HttpClient) {}

  getEmails() {
    return this.httpClient.get<EmailsResponse[]>(
      `${EmailService.API_URL}/emails`
    );
  }
}
