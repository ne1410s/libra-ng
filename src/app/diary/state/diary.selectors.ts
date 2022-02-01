import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DiaryState } from './diary.reducer';

const getDiaryFeatureState = createFeatureSelector<DiaryState>('diary');

export const getShowProductCode = createSelector(
  getDiaryFeatureState,
  state => state.showProductCode,
);

export const getCurrentProduct = createSelector(
  getDiaryFeatureState,
  state => state.currentProduct,
);

export const getProducts = createSelector(
  getDiaryFeatureState,
  state => state.products,
);

export const getError = createSelector(
  getDiaryFeatureState,
  state => state.error,
);