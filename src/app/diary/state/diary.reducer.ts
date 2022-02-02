import { createReducer, on } from '@ngrx/store';
import { CalorieRecord } from '../models/calorie-record';
import { WeightRecord } from '../models/weight-record';
import * as GlobalState from '../../state/app.state';
import * as DiaryActions from './diary.actions';

// extend the state interface for this lazy-loaded feature
export interface State extends GlobalState.State {
  diary: DiaryState;
}

export interface DiaryState {
  calorieRecords: CalorieRecord[];
  weightRecords: WeightRecord[];
  error: string;
}

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