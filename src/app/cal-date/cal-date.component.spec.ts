import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalDateComponent } from './cal-date.component';

describe('CalDateComponent', () => {
  let component: CalDateComponent;
  let fixture: ComponentFixture<CalDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
