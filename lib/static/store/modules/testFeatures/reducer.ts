import { TestFeaturesStore } from './types';
import data from '../../mocks/dataTest.js';

const newListTest = [];

function findChildren(object) {
  let obj;
  if (object.children) {
    object.children.map((elem) => {
      obj = findChildren(elem);
      newListTest.push(obj);
    });
  } else {
    return object;
  }
  return obj;
}

function getNewListTest() {
  data.suites.map((elem) => {
    findChildren(elem);
  });
}

getNewListTest();

const defaultState: any = {
  tests: newListTest,
};

const SET_INIT = 'SET_INIT';

export const reducer = (state: TestFeaturesStore = defaultState, action): TestFeaturesStore => {
  const { type } = action;

  switch (type) {
    case `${SET_INIT}`:
      return { ...state };

    default:
      return state;
  }
};
