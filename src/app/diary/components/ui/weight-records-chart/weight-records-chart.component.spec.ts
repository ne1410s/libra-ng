import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightRecordsChartComponent } from './weight-records-chart.component';

describe('WeightRecordsChartComponent', () => {
  let component: WeightRecordsChartComponent;
  let fixture: ComponentFixture<WeightRecordsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeightRecordsChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightRecordsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
