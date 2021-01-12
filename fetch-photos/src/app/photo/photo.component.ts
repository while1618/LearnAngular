import { Component, OnInit } from '@angular/core';
import { PhotoApiService } from '../photo-api.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
})
export class PhotoComponent implements OnInit {
  image: string;

  constructor(private api: PhotoApiService) {}

  ngOnInit(): void {
    this.fetchPhoto();
  }

  onClick() {
    this.fetchPhoto();
  }

  private fetchPhoto() {
    this.api.fetch().subscribe((image) => {
      this.image = image;
    });
  }
}
