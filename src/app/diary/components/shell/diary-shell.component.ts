import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { State, getCalorieRecords, getWeightRecords, getRecordsWindow } from '../../state';
import { CalorieRecord } from '../../models/calorie-record';
import { WeightRecord } from '../../models/weight-record';
import { DiaryPageActions } from '../../state/actions';
import { RecordsWindow } from '../../models/records-window';

@Component({
  templateUrl: './diary-shell.component.html',
})
export class DiaryComponent implements OnInit {

  calorieRecords$: Observable<CalorieRecord[]> = of();
  weightRecords$: Observable<WeightRecord[]> = of();
  recordsWindow$: Observable<RecordsWindow> = of();
  
  constructor(private store: Store<State>) { }
  
  ngOnInit(): void {
    this.calorieRecords$ = this.store.select(getCalorieRecords);
    this.weightRecords$ = this.store.select(getWeightRecords);
    this.recordsWindow$ = this.store.select(getRecordsWindow);

    this.store.dispatch(DiaryPageActions.loadCalorieRecords());
    this.store.dispatch(DiaryPageActions.loadWeightRecords());

    // this.store.dispatch(DiaryPageActions.switchRecordsWindowMode({ mode: 'week' }));
    // this.store.dispatch(DiaryPageActions.slideRecordsWindowOffset({ advance: true }));
  }
}
