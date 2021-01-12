import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';

interface PhotoApiResponse {
  urls: {
    regular: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PhotoApiService {
  constructor(private httpClient: HttpClient) {}

  fetch() {
    return this.httpClient
      .get<PhotoApiResponse>('https://api.unsplash.com/photos/random', {
        headers: {
          Authorization:
            'Client-ID 08d19507529308e6b6874e4bce18a309019a26273da0556b967fa3969e972cf1',
        },
      })
      .pipe(pluck('urls', 'regular'));
  }
}
