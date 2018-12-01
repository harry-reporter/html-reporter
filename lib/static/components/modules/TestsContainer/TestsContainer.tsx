import * as React from 'react';
import { connect } from 'react-redux';

import TestBox from 'src/components/modules/TestBox/TestBox';

import { RootStore } from 'src/store/types/store';
import { TestsContainerProps, TestsContainerState } from 'src/components/modules/TestsContainer/types';

class TestsContainer extends React.Component<TestsContainerProps, TestsContainerState> {
  public render(): JSX.Element {
    const { tests } = this.props;

    return (
      <div className={'pt-5'}>
        {tests.map((test) => (<TestBox data={test} />))}
      </div>
    );
  }
}

export default connect((state: RootStore) => ({
  tests: state.testFeatures.tests,
}))(TestsContainer);
