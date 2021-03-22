import { Injectable } from '@angular/core';
import { AsyncValidator, FormControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator {
  constructor(private authService: AuthService) {}

  validate = (
    formControl: FormControl
  ): Promise<ValidationErrors> | Observable<ValidationErrors> => {
    return this.authService.usernameAvailable(formControl.value).pipe(
      map((value) => {
        if (value.available) return null;
      }),
      catchError((error) => {
        if (!error.error.username) throw new Error(error);
        return of({ nonUniqueUsername: true });
      })
    );
  };
}
