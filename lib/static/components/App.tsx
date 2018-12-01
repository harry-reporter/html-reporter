import * as React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider, theme } from '../theme';
import { store } from '../store';
import 'primer/build/build.css';

import GlobalStyle from './GlobalStyle';
import Header from './layouts/Header/Header';
import Main from 'src/components/layouts/Main';
import NavigationPanel from 'src/components/modules/NavigationPanel/NavigationPanel';
import Title from 'src/components/ui/Title/Title';
import TestBox from 'src/components/modules/TestBox/TestBox';
// todo: решить конфликт import Header from './Header/Header';
import Header2 from './Header2/Header2';
import AccordeonMain from './AccordeonMain/AccordeonMain';
import AccordeonSubBox from './AccordeonSubBox/AccordeonSubBox';

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
          <Header pt={5} pl={3} pr={3}>
            <Title as={'h1'}>Harry report</Title>
          </Header>

          <Main pl={3} pr={3}>
            <NavigationPanel />
            <TestBox />
          </Main>
          <Header2
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
