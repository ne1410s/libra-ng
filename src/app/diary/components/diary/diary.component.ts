import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';

import { CalorieRecord } from '../../models/calorie-record';
import { State } from '../../state/diary.reducer';
import * as DiarySelectors from '../../state/diary.selectors';
import * as DiaryActions from '../../state/diary.actions';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss']
})
export class DiaryComponent implements OnInit {

  calorieRecords$!: Observable<CalorieRecord[]>;
  calorieRecordColumns = ['recorded', 'summary', 'intensity', 'amount', 'calories'];

  constructor(private store: Store<State>) { }
  
  ngOnInit(): void {
    this.calorieRecords$ = this.store.select(DiarySelectors.getCalorieRecords);
    this.store.dispatch(DiaryActions.loadCalorieRecords());
  }
}
