import { CalorieRecord } from "../models/calorie-record";
import { WeightRecord } from "../models/weight-record";
import * as GlobalState from '../../state/app.state';

export const diaryStateStoreName = 'diary';

// extend the state interface for this lazy-loaded feature
export interface State extends GlobalState.State {
  diary: DiaryState;
}

export interface DiaryState {
  calorieRecords: CalorieRecord[];
  weightRecords: WeightRecord[];
  error: string;
}
