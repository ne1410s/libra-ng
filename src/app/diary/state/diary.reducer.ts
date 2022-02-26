import { createReducer, on } from '@ngrx/store';
import { addDays, addMinutes, addMonths, addWeeks, addYears, differenceInDays, format, getWeek, startOfMonth, startOfWeek, startOfWeekWithOptions, startOfYear } from 'date-fns/fp'

import { CalorieRecord } from '../models/calorie-record';
import { RecordsWindow } from '../models/records-window';
import { WeightRecord } from '../models/weight-record';
import { DiaryApiActions, DiaryPageActions } from './actions';

export const diaryStateStoreName = 'diary';

export interface DiaryState {
  calorieRecords: CalorieRecord[];
  weightRecords: WeightRecord[];
  recordsWindow: RecordsWindow;
  error: string;
}

function getWindowTitle(mode: 'week' | 'month' | 'year' | 'custom', start: Date): string {
  switch (mode) {
    case 'week': return `Week ${ getWeek(start) }`;
    case 'month': return format("MMMM yyyy", start);
    case 'year': return format('yyyy', start);
    default: return 'Custom Date Range';
  }
}

function slideDate(d0: Date, mode: 'week' | 'month' | 'year', advance: boolean): Date {
  const incrementor = advance ? 1 : -1;
  let d1: Date;
  switch (mode) {
    case 'week': d1 = addWeeks(incrementor, d0); break;
    case 'month': d1 = addMonths(incrementor, d0); break;
    case 'year': d1 = addYears(incrementor, d0); break;
  }
  return retainClockHoursAfterSlide(d1, d0);
}

function retainClockHoursAfterSlide(newDate: Date, oldDate: Date): Date {
  const tzDelta = oldDate.getTimezoneOffset() - newDate.getTimezoneOffset();
  return addMinutes(tzDelta, newDate);
}

function getCustomWindow(start: Date, end: Date): RecordsWindow {
  const mode = 'custom';
  return { start, end, mode, title: getWindowTitle(mode, start) };
}

function getDefinedWindow(mode: 'week' | 'month' | 'year'): RecordsWindow {
  let start: Date;
  const now = new Date();
  switch (mode) {
    case 'week':
      start = startOfWeekWithOptions({ weekStartsOn: 1 }, now);
      break;
    case 'month':
      start = startOfMonth(now);
      break;
    default:
      mode = 'year';
      start = startOfYear(now);
      break;
  }

  return { start, mode, end: slideDate(start, mode, true), title: getWindowTitle(mode, start) };
}

const initialState: DiaryState = {
  calorieRecords: [],
  weightRecords: [],
  recordsWindow: getDefinedWindow('year'),
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
  on(DiaryPageActions.slideRecordsWindowOffset, (state, action): DiaryState => {
    let start, end: Date;
    const wnd = state.recordsWindow;
    if (wnd.mode == 'custom') {
      const multiplier = action.advance ? 1 : -1;
      const delta = differenceInDays(wnd.start, wnd.end);
      const rawStart = addDays(delta * multiplier, wnd.start);
      const rawEnd = addDays(delta * multiplier, wnd.end);
      start = retainClockHoursAfterSlide(rawStart, wnd.start);
      end = retainClockHoursAfterSlide(rawEnd, wnd.end);
    } else {
      start = slideDate(wnd.start, wnd.mode, action.advance);
      end = slideDate(wnd.end, wnd.mode, action.advance);
    }

    return {
      ...state,
      recordsWindow: {
        ...wnd,
        start,
        end,
        title: getWindowTitle(wnd.mode, start),
      },
    };
  }),
  on(DiaryPageActions.switchRecordsWindowMode, (state, action): DiaryState => {
    const wnd = state.recordsWindow;
    return {
      ...state,
      recordsWindow: action.mode == 'custom'
        ? getCustomWindow(wnd.start, wnd.end)
        : getDefinedWindow(action.mode),
    };
  }),
);