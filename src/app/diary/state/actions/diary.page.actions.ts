import { createAction } from '@ngrx/store';

export const loadCalorieRecords = createAction(
  '[Diary Page] Load Calorie Records',
);

export const loadWeightRecords = createAction(
  '[Diary Page] Load Weight Records',
);
