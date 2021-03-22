import { Injectable } from '@angular/core';
import { AsyncValidator, FormControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator {
  constructor(private httpClient: HttpClient) {}

  validate = (
    formControl: FormControl
  ): Promise<ValidationErrors> | Observable<ValidationErrors> => {
    const { value } = formControl;
    return this.httpClient
      .post<any>('https://api.angular-email.com/auth/username', {
        username: value,
      })
      .pipe(
        map((v) => {
          if (v.available) return null;
        }),
        catchError((error) => {
          if (!error.error.username) throw new Error(error);
          return of({ nonUniqueUsername: true });
        })
      );
  };
}
