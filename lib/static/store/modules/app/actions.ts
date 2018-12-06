import { filter, flatMap, set, cloneDeep } from 'lodash';
import * as actionNames from './constants';
import { isSuiteFailed, isAcceptable } from '../../utils/utils';

export const setTestsType = (type) => ({ type: actionNames.SET_TESTS_TYPE, payload: type });

export const initGui = () => {
  return async (dispatch) => {
    try {
      const appState = await fetch('/init').then((res) => res.json());
      dispatch({
        type: actionNames.INIT_GUI,
        payload: appState,
      });
    } catch (e) {
      // handle error
    }
  };
};

const runTests = ({ tests = [], action = {} } = {}) => {
  return async (dispatch) => {
    try {
      await fetch('/run', { method: 'POST', body: JSON.stringify(tests) });
      dispatch(action);
    } catch (e) {
      // handle error
    }
  };
};

export const runAllTests = () => {
  return runTests({
    action: { type: actionNames.RUN_ALL },
  });
};

export const runFailedTests = (fails, actionName = actionNames.RUN_FAILED) => {
  fails = filterFailedBrowsers([].concat(fails));

  return runTests({ tests: fails, action: { type: actionName } });
};

const filterBrowsers = (suites = [], filterFn) => {
  const modifySuite = (suite) => {
    if (suite.children) {
      return flatMap(suite.children, modifySuite);
    }

    return set(suite, 'browsers', filter(suite.browsers, (bro) => {
      if (suite.browserId && suite.browserId !== bro.name) {
        return false;
      }

      const browserResult = getBrowserResultByAttempt(bro, suite.acceptTestAttempt);

      return filterFn(browserResult);
    }));
  };

  return flatMap(cloneDeep(suites), modifySuite);
};

const filterFailedBrowsers = (suites = []) => {
  return filterBrowsers(suites, isSuiteFailed);
};

const filterAcceptableBrowsers = (suites = []) => {
  return filterBrowsers(suites, isAcceptable);
};

const getBrowserResultByAttempt = (browser, attempt) => {
  return attempt >= 0
    ? browser.retries.concat(browser.result)[attempt]
    : browser.result;
};
