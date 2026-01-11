import { Component, DestroyRef, inject } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { BookingStateService } from '../../services/booking-state.service';
import { CommonModule } from '@angular/common';

type StepKey = 'basic-details' | 'cuisine-types' | 'personal-preferences';

@Component({
  selector: 'app-booking-shell',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './booking-shell.html',
  styleUrls: ['./booking-shell.css'],
})
export class BookingShell {
  readonly steps: { key: StepKey; title: string; subtitle: string; icon: string }[] = [
    { key: 'basic-details', title: 'BASIC DETAILS', subtitle: 'Please provide your name and email', icon: '👤' },
    { key: 'cuisine-types', title: 'CUISINE TYPES', subtitle: 'A few details about your company', icon: '🏳️' },
    { key: 'personal-preferences', title: 'PERSONAL PREFERENCES', subtitle: 'Start collaborating with your team', icon: '👥' },
  ];

  activeKey: StepKey = 'basic-details';

  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  constructor(public readonly booking: BookingStateService) {
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        const url = this.router.url;
        const match = this.steps.find((s) => url.includes('/' + s.key));
        this.activeKey = match?.key ?? 'basic-details';
      });
  }

  isActive(key: StepKey) {
    return this.activeKey === key;
  }

  isDone(key: StepKey) {
    const order: StepKey[] = ['basic-details', 'cuisine-types', 'personal-preferences'];
    return order.indexOf(key) < order.indexOf(this.activeKey);
  }
}
