import { createReducer, on } from '@ngrx/store';
import { CalorieRecord } from '../models/calorie-record';
import { RecordsWindow } from '../models/records-window';
import { WeightRecord } from '../models/weight-record';

import { DiaryApiActions } from './actions';

export const diaryStateStoreName = 'diary';

export interface DiaryState {
  calorieRecords: CalorieRecord[];
  weightRecords: WeightRecord[];
  recordsWindow: RecordsWindow;
  error: string;
}

export function getCustomWindow(start: Date, end: Date): RecordsWindow {
  return {
    start, end, mode: 'custom', offset: 0, title: 'Hello, custom'
  };
}

export function getOffsetWindow(mode: 'week' | 'month' | 'year', offset: number = 0): RecordsWindow {
  let title: string, start, end: Date;    
  const now = new Date();
  switch (mode) {
    case 'week':
      title = 'Hello, week';
      start = new Date(2022, 1, 7);
      end = new Date(2022, 1, 14);
      break;
    case 'month':
      title = 'Hello, month';
      start = new Date(now.getFullYear(), now.getMonth() + offset, 1);
      end = new Date(now.getFullYear(), now.getMonth() + offset + 1, 1);
      break;
    default:
      mode = 'year';
      title = 'Hello, year';
      start = new Date(now.getFullYear() + offset, 0, 1);
      end = new Date(now.getFullYear() + offset + 1, 0, 1);
      break;
  }

  return { title, start, end, mode, offset };
}

const initialState: DiaryState = {
  calorieRecords: [],
  weightRecords: [],
  recordsWindow: getOffsetWindow('year'),
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