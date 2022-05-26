import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleseriestimeComponent } from './multipleseriestime.component';

describe('MultipleseriestimeComponent', () => {
  let component: MultipleseriestimeComponent;
  let fixture: ComponentFixture<MultipleseriestimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleseriestimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleseriestimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
