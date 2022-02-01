import { createReducer, on } from '@ngrx/store';
import * as GlobalState from '../../state/app.state';
import * as DiaryActions from './diary.actions';

// extend the state interface for this lazy-loaded feature
export interface State extends GlobalState.State {
  diary: DiaryState;
}

export interface DiaryState {
  showProductCode: boolean;
  currentProduct: Product;
  products: Product[];
  error: string;
}

const initialState: ProductState = {
  showProductCode: true,
  currentProduct: null,
  products: [],
  error: '',
}

export const productReducer = createReducer<ProductState>(
  initialState,
  on(ProductActions.toggleProductCode, (state): ProductState => {
    return {
      ...state,
      showProductCode: !state.showProductCode,
    };
  }),