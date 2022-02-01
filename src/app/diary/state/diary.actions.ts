import { createAction, props } from '@ngrx/store';
import { CalorieRecord } from '../models/calorie-record';
import { WeightRecord } from '../models/weight-record';

export const loadCalorieRecords = createAction(
  '[Diary] Load Calorie Records',
);
export const loadCalorieRecordsSuccess = createAction(
  '[Diary] Load Calorie Records - Success',
  props<{ records: CalorieRecord[] }>(),
);
export const loadCalorieRecordsFailure = createAction(
  '[Diary] Load Calorie Records - Failure',
  props<{ error: string }>(),
);

export const loadWeightRecords = createAction(
  '[Diary] Load Weight Records',
);
export const loadWeightRecordsSuccess = createAction(
  '[Diary] Load Weight Records - Success',
  props<{ records: WeightRecord[] }>(),
);
export const loadWeightRecordsFailure = createAction(
  '[Diary] Load Weight Records - Failure',
  props<{ error: string }>(),
);