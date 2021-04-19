import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email } from './email';

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

  getEmail(id: string) {
    return this.httpClient.get<Email>(`${EmailService.API_URL}/emails/${id}`);
  }

  sendEmail(email: Email) {
    return this.httpClient.post(`${EmailService.API_URL}/emails`, email);
  }
}
