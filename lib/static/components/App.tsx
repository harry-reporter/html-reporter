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

interface AppProps {}

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
          <GlobalStyle />
        </>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
