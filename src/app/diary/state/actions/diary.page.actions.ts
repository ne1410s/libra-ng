import { createAction, props } from '@ngrx/store';

export const loadCalorieRecords = createAction(
  '[Diary Page] Load Calorie Records',
);

export const loadWeightRecords = createAction(
  '[Diary Page] Load Weight Records',
);

export const slideRecordsWindowOffset = createAction(
  '[Diary Page] Slide Records Window Offset',
  props<{ advance: boolean }>(),
);

export const switchRecordsWindowMode = createAction(
  '[Diary Page] Switch Records Window Mode',
  props<{ mode: 'week' | 'month' | 'year' | 'custom' }>(),
);