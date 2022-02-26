import { createFeatureSelector, createSelector } from '@ngrx/store';

import { DiaryState, diaryStateStoreName } from './diary.reducer';
import { State as GlobalAppState } from '../../state/app.state';

// extend the state interface for this lazy-loaded feature
export interface State extends GlobalAppState {
  diary: DiaryState;
}

const getDiaryFeatureState = createFeatureSelector<DiaryState>(diaryStateStoreName);

export const getWeightRecords = createSelector(
  getDiaryFeatureState,
  state => state.weightRecords,
);

export const getCalorieRecords = createSelector(
  getDiaryFeatureState,
  state => state.calorieRecords,
);

export const getRecordsWindow = createSelector(
  getDiaryFeatureState,
  state => state.recordsWindow,
);