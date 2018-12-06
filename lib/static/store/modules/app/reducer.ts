import { AppStore, TestsTypeKey } from './types';

const defaultState: AppStore = {
  selectedTestsType: TestsTypeKey.total,
};

const SET_TESTS_TYPE = 'SET_TESTS_TYPE';

export const reducer = (state: AppStore = defaultState, action): AppStore => {
  const { type, payload } = action;

  switch (type) {
    case `${SET_TESTS_TYPE}`:
      return { ...state, selectedTestsType: payload };

    default: return state;
  }
};
