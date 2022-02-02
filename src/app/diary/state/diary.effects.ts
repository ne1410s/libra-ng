import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { DiaryService } from '../diary.service';
import * as DiaryActions from '../state/diary.actions';

@Injectable()
export class DiaryEffects {

  constructor(
    private actions$: Actions,
    private diaryService: DiaryService) { }

  loadCalorieRecords$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DiaryActions.loadCalorieRecords),
      mergeMap(() => this.diaryService.getCalorieRecords().pipe(
        map(records => DiaryActions.loadCalorieRecordsSuccess({ records })),
        catchError(error => of(DiaryActions.loadCalorieRecordsFailure({ error })))
      ))
    )
  });

  loadWeightRecords$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DiaryActions.loadWeightRecords),
      mergeMap(() => this.diaryService.getWeightRecords().pipe(
        map(records => DiaryActions.loadWeightRecordsSuccess({ records })),
        catchError(error => of(DiaryActions.loadWeightRecordsFailure({ error })))
      ))
    )
  });
}