import * as React from 'react';

import Header from './Header';
import Feature from './Feature';

import { TestBoxProps, TestBoxState } from 'src/components/modules/TestBox/types';

class TestBox extends React.Component<TestBoxProps, TestBoxState> {
  public state = {
    isOpen: true,
  };

  public toggleBox = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  public getSuite = (suitePath) => suitePath.join(' / ');

  public renderFeatures = (): any => {
    const { data } = this.props;

    return data.browsers.map((item, id) => <Feature key={id} data={item} />);
  }

  public render(): JSX.Element {
    const { data } = this.props;
    const { isOpen } = this.state;

    const suite = this.getSuite(data.suitePath);

    return (
      <div className={'Box mb-3'}>
        <Header title={suite} status={data.status} isOpenedBox={isOpen} onToggle={this.toggleBox} />
        {isOpen && this.renderFeatures()}
      </div>
    );
  }
}

export default TestBox;
