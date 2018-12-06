import { filter, flatMap, set, cloneDeep, compact } from 'lodash';
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

export const acceptAll = (fails) => {
  fails = filterAcceptableBrowsers([].concat(fails));

  const formattedFails = flatMap([].concat(fails), formatTests);

  return async (dispatch) => {
    try {
      const updatedData = await fetch(
        '/update-reference',
        { method: 'POST', body: JSON.stringify(compact(formattedFails)) },
      );
      dispatch({ type: actionNames.ACCEPT_ALL_REFS, payload: updatedData });
    } catch (e) {
      // handle error
    }
  };
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

const formatTests = (test) => {
  if (test.children) {
    return flatMap(test.children, formatTests);
  }

  if (test.browserId) {
    test.browsers = filter(test.browsers, { name: test.browserId });
  }

  const { suitePath, name, acceptTestAttempt } = test;
  const prepareImages = (images, filterCond) => {
    return filter(images, filterCond)
      .filter(isAcceptable)
      .map(({ actualPath, stateName }) => ({ status: 'updated', actualPath, stateName }));
  };

  return flatMap(test.browsers, (browser) => {
    const browserResult = getBrowserResultByAttempt(browser, acceptTestAttempt);

    const imagesInfo = test.stateName
      ? prepareImages(browserResult.imagesInfo, { stateName: test.stateName })
      : prepareImages(browserResult.imagesInfo, 'actualPath');

    const { metaInfo, attempt } = browserResult;

    return imagesInfo.length && {
      suite: { path: suitePath.slice(0, -1) },
      state: { name },
      browserId: browser.name,
      metaInfo,
      imagesInfo,
      attempt,
    };
  });
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
