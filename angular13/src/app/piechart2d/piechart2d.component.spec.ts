import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Piechart2dComponent } from './piechart2d.component';

describe('Piechart2dComponent', () => {
  let component: Piechart2dComponent;
  let fixture: ComponentFixture<Piechart2dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Piechart2dComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Piechart2dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
