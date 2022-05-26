import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplebubbleComponent } from './simplebubble.component';

describe('SimplebubbleComponent', () => {
  let component: SimplebubbleComponent;
  let fixture: ComponentFixture<SimplebubbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplebubbleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplebubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
