import * as React from 'react';
import { connect } from 'react-redux';
import { getTestsByType } from './selectors';

import TestBox from 'src/components/modules/TestBox/TestBox';

import { RootStore } from 'src/store/types/store';
import { TestsContainerProps, TestsContainerState } from './types';

class TestsContainer extends React.Component<TestsContainerProps, TestsContainerState> {
  public render(): JSX.Element {
    const { tests } = this.props;

    return (
      <div className={'pt-5'}>
        {tests.map((test, id) => (<TestBox key={id} data={test} />))}
      </div>
    );
  }
}

export default connect(({ tests, app}: RootStore) => ({
  tests: getTestsByType(tests.tests, tests.skips, app.selectedTestsType),
}))(TestsContainer);
