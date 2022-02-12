import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { State, getCalorieRecords, getWeightRecords } from '../../state';
import { CalorieRecord } from '../../models/calorie-record';
import { WeightRecord } from '../../models/weight-record';
import * as DiaryActions from '../../state/actions/diary.page.actions';

@Component({
  templateUrl: './smart-diary.component.html',
})
export class DiaryComponent implements OnInit {

  calorieRecords$: Observable<CalorieRecord[]> = of();
  weightRecords$: Observable<WeightRecord[]> = of();
  
  constructor(private store: Store<State>) { }
  
  ngOnInit(): void {
    this.calorieRecords$ = this.store.select(getCalorieRecords);
    this.weightRecords$ = this.store.select(getWeightRecords);

    this.store.dispatch(DiaryActions.loadCalorieRecords());
    this.store.dispatch(DiaryActions.loadWeightRecords());
  }
}
