import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Email } from '../email';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css'],
})
export class EmailFormComponent implements OnInit {
  @Input() email: Email;
  emailFrom: FormGroup;
  @Output() emailSubmit = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    const { subject, from, to, text } = this.email;
    this.emailFrom = new FormGroup({
      to: new FormControl(to, [Validators.required, Validators.email]),
      from: new FormControl({ value: from, disabled: true }),
      subject: new FormControl(subject, [Validators.required]),
      text: new FormControl(text, [Validators.required]),
    });
  }

  onSubmit() {
    if (this.emailFrom.invalid) return;

    this.emailSubmit.emit(this.emailFrom.value);
  }
}
