import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuisineTypes } from './cuisine-types';

describe('CuisineTypes', () => {
  let component: CuisineTypes;
  let fixture: ComponentFixture<CuisineTypes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuisineTypes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuisineTypes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
