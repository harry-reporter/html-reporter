import { combineReducers } from 'redux';

import { reducer as testFeaturesReducer } from './testFeatures/reducer';
import { RootStore } from '../types/store';

export const rootReducer = combineReducers<RootStore>({
  testFeatures: testFeaturesReducer,
});

export default rootReducer;
