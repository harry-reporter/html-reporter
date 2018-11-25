import * as React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider, theme } from '../theme';
import { store } from '../store';

import GlobalStyle from './GlobalStyle';

interface AppProps {}

const App: React.SFC<AppProps> = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <>
          <button className={'btn'}>что-то</button>
          <GlobalStyle />
        </>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
