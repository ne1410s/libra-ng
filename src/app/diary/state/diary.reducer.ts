import { createReducer, on } from '@ngrx/store';
import { CalorieRecord } from '../models/calorie-record';
import { WeightRecord } from '../models/weight-record';

import { DiaryApiActions } from './actions';

export const diaryStateStoreName = 'diary';

export interface DiaryState {
  calorieRecords: CalorieRecord[];
  weightRecords: WeightRecord[];
  error: string;
}

const initialState: DiaryState = {
  calorieRecords: [],
  weightRecords: [],
  error: '',
};

export const diaryReducer = createReducer<DiaryState>(
  initialState,
  on(DiaryApiActions.loadCalorieRecordsSuccess, (state, action): DiaryState => {
    return {
      ...state,
      calorieRecords: action.records,
      error: '',
    };
  }),
  on(DiaryApiActions.loadCalorieRecordsFailure, (state, action): DiaryState => {
    return {
      ...state,
      calorieRecords: [],
      error: action.error,
    };
  }),
  on(DiaryApiActions.loadWeightRecordsSuccess, (state, action): DiaryState => {
    return {
      ...state,
      weightRecords: action.records,
      error: '',
    };
  }),
  on(DiaryApiActions.loadWeightRecordsFailure, (state, action): DiaryState => {
    return {
      ...state,
      weightRecords: [],
      error: action.error,
    };
  }),
);