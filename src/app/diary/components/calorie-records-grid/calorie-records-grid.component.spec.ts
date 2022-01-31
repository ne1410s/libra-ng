import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalorieRecordsGridComponent } from './calorie-records-grid.component';

describe('CalorieRecordsGridComponent', () => {
  let component: CalorieRecordsGridComponent;
  let fixture: ComponentFixture<CalorieRecordsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalorieRecordsGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalorieRecordsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
