import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalPreferences } from './personal-preferences';

describe('PersonalPreferences', () => {
  let component: PersonalPreferences;
  let fixture: ComponentFixture<PersonalPreferences>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalPreferences]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalPreferences);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
