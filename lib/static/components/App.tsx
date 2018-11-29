import * as React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider, theme } from '../theme';
import { store } from '../store';

import GlobalStyle from './GlobalStyle';
import Header from './Header/Header';
import AccordeonMain from './AccordeonMain/AccordeonMain';
import AccordeonSubBox from './AccordeonSubBox/AccordeonSubBox';
import 'primer/build/build.css';

import { data } from './data.js';
import { string } from 'prop-types';
import { IIt } from './types';

interface AppProps {}

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

function renderSubAccorderon(describeArray: IIt[]) {
  return describeArray.map((it, index) => {
    return <AccordeonSubBox title={it.name} status={it.result.status} key={index} />;
  });
}

function renderAccorderon() {
  getNewListTest();
  return newListTest.map((describe, index) => {
    return (
      <AccordeonMain title={describe.suitePath.join(' / ')} status={describe.status} key={index}>
        {renderSubAccorderon(describe.browsers)}
      </AccordeonMain>
    );
  });
}

const App: React.SFC<AppProps> = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <>
          <Header
            total={data.total}
            passed={data.passed}
            failed={data.suites.failed}
            skipped={data.suites.skipped}
            retries={data.suites.retries}
          />
          {renderAccorderon()}
          <button className={'btn'}>что-то</button>
          <GlobalStyle />
        </>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
