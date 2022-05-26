import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleganttComponent } from './simplegantt.component';

describe('SimpleganttComponent', () => {
  let component: SimpleganttComponent;
  let fixture: ComponentFixture<SimpleganttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleganttComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleganttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
