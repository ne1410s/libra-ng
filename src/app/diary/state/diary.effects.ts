import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { DiaryService } from '../diary.service';
import { DiaryApiActions, DiaryPageActions } from './actions';

@Injectable()
export class DiaryEffects {

  constructor(
    private actions$: Actions,
    private diaryService: DiaryService) { }

  loadCalorieRecords$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DiaryPageActions.loadCalorieRecords),
      mergeMap(() => this.diaryService.getCalorieRecords().pipe(
        map(records => DiaryApiActions.loadCalorieRecordsSuccess({ records })),
        catchError(error => of(DiaryApiActions.loadCalorieRecordsFailure({ error })))
      ))
    );
  });

  loadWeightRecords$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DiaryPageActions.loadWeightRecords),
      mergeMap(() => this.diaryService.getWeightRecords().pipe(
        map(records => DiaryApiActions.loadWeightRecordsSuccess({ records })),
        catchError(error => of(DiaryApiActions.loadWeightRecordsFailure({ error })))
      ))
    );
  });
}