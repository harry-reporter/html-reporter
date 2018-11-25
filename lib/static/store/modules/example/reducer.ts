import { ExampleStore } from './types';

const defaultState: ExampleStore = {
  isInit: false,
};

const SET_INIT = 'SET_INIT';

export const reducer = (state: ExampleStore = defaultState, action): ExampleStore => {
  const { type } = action;

  switch (type) {
    case `${SET_INIT}`:
      return { ...state };

    default: return state;
  }
};
