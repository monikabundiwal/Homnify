import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { BookingStateService } from '../../services/booking-state.service';

type MealSlot = 'today_lunch' | 'today_dinner' | 'tomorrow_lunch' | 'tomorrow_dinner';
type FamilySize = '1-2' | '3-4' | '5-6' | '7+';

@Component({
  selector: 'app-basic-details',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './basic-details.html',
  styleUrls: ['./basic-details.css'],
})
export class BasicDetails {
  readonly form;

  constructor(
    private readonly fb: FormBuilder,
    private readonly booking: BookingStateService,
    private readonly router: Router
  ) {
    this.form = this.fb.group({
      mealSlot: this.fb.control<MealSlot>('today_lunch', { nonNullable: true }),
      familySize: this.fb.control<FamilySize>('3-4', { nonNullable: true }),
      breakfast: this.fb.control(true, { nonNullable: true }),
      lunch: this.fb.control(false, { nonNullable: true }),
      dinner: this.fb.control(false, { nonNullable: true }),
      all: this.fb.control(false, { nonNullable: true }),
      name: this.fb.control('', { validators: [Validators.maxLength(80)] }),
      email: this.fb.control('', { validators: [Validators.email] }),
    });
  }
goBack(): void {
  this.router.navigate(['/book/basic-details']);
}
  goNext(): void {
    const v = this.form.getRawValue();
    this.booking.patch({
      mealSlot: v.mealSlot,
      familySize: v.familySize,
      mealTimings: {
        breakfast: v.breakfast,
        lunch: v.lunch,
        dinner: v.dinner,
        all: v.all,
      },
    });
    
    
    this.router.navigate(['/book/cuisine-types']);
  }
}
