import { AppStore, TestsTypeKey } from './types';
import * as actionNames from './constants';

const defaultState: AppStore = {
  selectedTestsType: TestsTypeKey.total,
  url: '',
  viewMode: '3-up',
};

export const reducer = (state: AppStore = defaultState, action): AppStore => {
  const { type, payload } = action;

  switch (type) {
    case actionNames.SET_TESTS_TYPE:
      return { ...state, selectedTestsType: payload };

    case actionNames.UPDATE_URL:
      return { ...state, url: payload };

    case actionNames.SET_VIEW_MODE:
      return { ...state, viewMode: payload };

    default: return state;
  }
};
