import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type MealSlot =
  | 'now_15_30'
  | 'today_lunch'
  | 'today_dinner'
  | 'tomorrow_morning'
  | 'tomorrow_lunch'
  | 'tomorrow_dinner'
  | 'custom';

export type FamilySize = '1-2' | '3-4' | '5-6' | '7+';

export interface BookingState {
  mealSlot: MealSlot | null;
  familySize: FamilySize | null;
  mealTimings: { breakfast: boolean; lunch: boolean; dinner: boolean; all: boolean };
  cuisineTypes: string[];
  personalPrefs: { notes: string; allergies: string; spiceLevel: 'mild' | 'medium' | 'hot' };
  pricing: { base: number; tax: number };
}

const initialState: BookingState = {
  mealSlot: 'today_lunch',
  familySize: '3-4',
  mealTimings: { breakfast: true, lunch: false, dinner: false, all: false },
  cuisineTypes: [],
  personalPrefs: { notes: '', allergies: '', spiceLevel: 'medium' },
  pricing: { base: 499, tax: 49 },
};

@Injectable({ providedIn: 'root' })
export class BookingStateService {
  private readonly _state$ = new BehaviorSubject<BookingState>(initialState);
  readonly state$ = this._state$.asObservable();

  get snapshot(): BookingState {
    return this._state$.value;
  }

  patch(partial: Partial<BookingState>) {
    this._state$.next({ ...this.snapshot, ...partial });
  }

  get total(): number {
    const { base, tax } = this.snapshot.pricing;
    return base + tax;
  }
}
