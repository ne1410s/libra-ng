import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightRecordsGridComponent } from './weight-records-grid.component';

describe('WeightRecordsGridComponent', () => {
  let component: WeightRecordsGridComponent;
  let fixture: ComponentFixture<WeightRecordsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeightRecordsGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightRecordsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
