import { createFeatureSelector, createSelector } from '@ngrx/store';

import { DiaryState } from './diary.reducer';

const getDiaryFeatureState = createFeatureSelector<DiaryState>('diary');

export const getWeightRecords = createSelector(
  getDiaryFeatureState,
  state => state.weightRecords,
);

export const getCalorieRecords = createSelector(
  getDiaryFeatureState,
  state => state.calorieRecords,
);