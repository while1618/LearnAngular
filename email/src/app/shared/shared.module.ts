import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { AuthRoutingModule } from '../auth/auth-routing.module';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [InputComponent, NavMenuComponent, ModalComponent],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule],
  exports: [InputComponent, NavMenuComponent, ModalComponent],
})
export class SharedModule {}
