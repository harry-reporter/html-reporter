import * as React from 'react';

import 'primer-box/index.scss';

import Header from './Header/Header';

interface AppProps {}

const App: React.SFC<AppProps> = () => {
  return (
    <React.Fragment>
      <div>APPs</div>
      <Header />
    </React.Fragment>
  );
};

export default App;
