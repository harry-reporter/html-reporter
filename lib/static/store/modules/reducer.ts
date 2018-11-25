import { combineReducers } from 'redux';

import { reducer as exampleReducer } from './example/reducer';
import { RootStore, StoreKey } from '../types/store';

export const rootReducer = combineReducers<RootStore>({
  example: exampleReducer,
});

export default rootReducer;
