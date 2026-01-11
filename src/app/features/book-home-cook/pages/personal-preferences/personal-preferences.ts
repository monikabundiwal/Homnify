import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { BookingStateService } from '../../services/booking-state.service';

@Component({
  selector: 'app-personal-preferences',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './personal-preferences.html',
  styleUrls: ['./personal-preferences.css'],
})
export class PersonalPreferences {
  readonly form;

  constructor(
    private readonly fb: FormBuilder,
    private readonly booking: BookingStateService,
    private readonly router: Router
  ) {
    this.form = this.fb.group({
      spiceLevel: this.fb.control<'mild' | 'medium' | 'hot'>('medium', { nonNullable: true }),
      allergies: this.fb.control('', { nonNullable: true, validators: [Validators.maxLength(200)] }),
      notes: this.fb.control('', { nonNullable: true, validators: [Validators.maxLength(400)] }),
    });
  }

  back(): void {
    this.router.navigate(['/book/cuisine-types']);
  }

  finish(): void {
    this.booking.patch({ personalPrefs: this.form.getRawValue() });
    alert('Booking saved locally (demo). Hook this to API/checkout next.');
  }
}
