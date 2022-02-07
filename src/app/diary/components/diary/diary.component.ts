import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CalorieRecord } from '../../models/calorie-record';
import { State } from '../../state/diary.state';
import * as DiarySelectors from '../../state/diary.selectors';
import * as DiaryActions from '../../state/diary.actions';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss']
})
export class DiaryComponent implements OnInit {

  calorieRecords$!: Observable<CalorieRecord[]>;
  
  constructor(private store: Store<State>) { }
  
  ngOnInit(): void {
    this.calorieRecords$ = this.store.select(DiarySelectors.getCalorieRecords);
    this.store.dispatch(DiaryActions.loadCalorieRecords());
  }
}
