import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingShell } from './booking-shell';

describe('BookingShell', () => {
  let component: BookingShell;
  let fixture: ComponentFixture<BookingShell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingShell]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingShell);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
