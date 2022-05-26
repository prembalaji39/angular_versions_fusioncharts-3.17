import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractivecandleComponent } from './interactivecandle.component';

describe('InteractivecandleComponent', () => {
  let component: InteractivecandleComponent;
  let fixture: ComponentFixture<InteractivecandleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractivecandleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractivecandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
