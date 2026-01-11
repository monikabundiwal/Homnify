import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { BookingStateService } from '../../services/booking-state.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cuisine-types',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule,CommonModule],
  templateUrl: './cuisine-types.html',
  styleUrls: ['./cuisine-types.css'],
})
export class CuisineTypes {
  readonly options = ['North Indian', 'South Indian', 'Chinese', 'Italian', 'Keto', 'Jain'];

  readonly form;

  constructor(
    private readonly fb: FormBuilder,
    private readonly booking: BookingStateService,
    private readonly router: Router
  ) {
    this.form = this.fb.group({
      selections: this.fb.control<string[]>([], { nonNullable: true }),
    });
  }

  toggle(name: string): void {
    const arr = [...this.form.controls.selections.value];
    const idx = arr.indexOf(name);

    if (idx >= 0) {
      arr.splice(idx, 1);
    } else {
      arr.push(name);
    }

    this.form.controls.selections.setValue(arr);
  }

  next(): void {
    this.booking.patch({ cuisineTypes: this.form.getRawValue().selections });
    this.router.navigate(['/book/personal-preferences']);
  }

  back(): void {
    this.router.navigate(['/book/basic-details']);
  }
}
