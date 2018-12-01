import { TestFeaturesStore, TestData, Suite } from './types';
import data from '../../mocks/data.js';

const newListTest: Suite[] = [];

function findChildren(object: Suite) {
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

function getNewListTest(oldList: TestData) {
  oldList.suites.map((elem) => {
    findChildren(elem);
  });
}

getNewListTest(data);

const defaultState: TestFeaturesStore = {
  tests: newListTest,
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
