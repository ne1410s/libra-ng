import { createAction, props } from '@ngrx/store';
import { CalorieRecord } from '../../models/calorie-record';
import { WeightRecord } from '../../models/weight-record';

export const loadCalorieRecordsSuccess = createAction(
  '[Diary API] Load Calorie Records - Success',
  props<{ records: CalorieRecord[] }>(),
);

export const loadCalorieRecordsFailure = createAction(
  '[Diary API] Load Calorie Records - Failure',
  props<{ error: string }>(),
);

export const loadWeightRecordsSuccess = createAction(
  '[Diary API] Load Weight Records - Success',
  props<{ records: WeightRecord[] }>(),
);

export const loadWeightRecordsFailure = createAction(
  '[Diary API] Load Weight Records - Failure',
  props<{ error: string }>(),
);
