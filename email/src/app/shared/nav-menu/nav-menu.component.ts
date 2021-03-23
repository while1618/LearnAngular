import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
})
export class NavMenuComponent implements OnInit {
  signedIn = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.signedIn$.subscribe((signedIn) => {
      this.signedIn = signedIn;
    });
  }
}
