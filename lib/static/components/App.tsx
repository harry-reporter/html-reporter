import * as React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider, theme } from '../theme';
import { store } from '../store';

import GlobalStyle from './GlobalStyle';
import Header from './Header/Header';
import AccordeonMain from './AccordeonMain/AccordeonMain';
import AccordeonSubBox from './AccordeonSubBox/AccordeonSubBox';

import data from './dataNew.js';

interface AppProps {}

const App: React.SFC<AppProps> = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <>
          <Header
            total={data.total}
            passed={data.passed}
            failed={data.failed}
            skipped={data.skipped}
            retries={data.retries}
          />
          {console.log(data)}
          {data.tests.map((description, index) => {
            return (
              <AccordeonMain title={description.title} key={index}>
                {description.checks.map((it, index) => {
                  return <AccordeonSubBox title={it.title} key={index} />;
                })}
              </AccordeonMain>
            );
          })}

          <button className={'btn'}>что-то</button>
          <GlobalStyle />
        </>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
