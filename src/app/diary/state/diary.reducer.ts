import { createReducer, on } from '@ngrx/store';

import { DiaryState } from './diary.state';
import * as DiaryActions from './diary.actions';

const initialState: DiaryState = {
  calorieRecords: [],
  weightRecords: [],
  error: '',
}

export const diaryReducer = createReducer<DiaryState>(
  initialState,
  on(DiaryActions.loadCalorieRecordsSuccess, (state, action): DiaryState => {
    return {
      ...state,
      calorieRecords: action.records,
      error: '',
    };
  }),
  on(DiaryActions.loadCalorieRecordsFailure, (state, action): DiaryState => {
    return {
      ...state,
      calorieRecords: [],
      error: action.error,
    };
  }),
  on(DiaryActions.loadWeightRecordsSuccess, (state, action): DiaryState => {
    return {
      ...state,
      weightRecords: action.records,
      error: '',
    };
  }),
  on(DiaryActions.loadWeightRecordsFailure, (state, action): DiaryState => {
    return {
      ...state,
      weightRecords: [],
      error: action.error,
    };
  }),
);