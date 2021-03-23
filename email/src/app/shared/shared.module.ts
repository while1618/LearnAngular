import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { AuthRoutingModule } from '../auth/auth-routing.module';

@NgModule({
  declarations: [InputComponent, NavMenuComponent],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule],
  exports: [InputComponent, NavMenuComponent],
})
export class SharedModule {}
