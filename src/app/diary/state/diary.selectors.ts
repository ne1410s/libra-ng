import { createFeatureSelector, createSelector } from '@ngrx/store';

import { DiaryState, diaryStateStoreName } from './diary.state';

const getDiaryFeatureState = createFeatureSelector<DiaryState>(diaryStateStoreName);

export const getWeightRecords = createSelector(
  getDiaryFeatureState,
  state => state.weightRecords,
);

export const getCalorieRecords = createSelector(
  getDiaryFeatureState,
  state => state.calorieRecords,
);