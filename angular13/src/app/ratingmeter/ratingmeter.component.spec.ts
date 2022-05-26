import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingmeterComponent } from './ratingmeter.component';

describe('RatingmeterComponent', () => {
  let component: RatingmeterComponent;
  let fixture: ComponentFixture<RatingmeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingmeterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingmeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
