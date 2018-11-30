import { TestFeaturesStore } from './types';
import dataNew from '../../mocks/dataNew.js';

const defaultState: TestFeaturesStore = {
  ...dataNew,
};

const SET_INIT = 'SET_INIT';

export const reducer = (state: TestFeaturesStore = defaultState, action): TestFeaturesStore => {
  const { type } = action;

  switch (type) {
    case `${SET_INIT}`:
      return { ...state };

    default: return state;
  }
};
