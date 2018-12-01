import * as React from 'react';

import Header from './Header';
import Feature from './Feature';

import { TestBoxProps, TestBoxState } from 'src/components/modules/TestBox/types';

class TestBox extends React.Component<TestBoxProps, TestBoxState> {
  public state = {
    isOpen: true,
  };

  public componentDidMount(): void {
    const { data } = this.props;

    this.setState({
      isOpen: data.status === 'fail',
    });
  }

  public toggleBox = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  public getSuite = (suitePath) => suitePath.join(' / ');

  public renderFeatures = (): JSX.Element => {
    const { data } = this.props;

    return data.browsers.map((item: any, id: number) => <Feature key={id} data={item} />);
  }

  public render(): JSX.Element {
    const { data } = this.props;
    const { isOpen } = this.state;

    const suite = this.getSuite(data.suitePath);

    return (
      <div className={'Box'}>
        <Header title={suite} status={data.status} isOpenedBox={isOpen} onToggle={this.toggleBox} />
        {isOpen && this.renderFeatures()}
      </div>
    );
  }
}

export default TestBox;
