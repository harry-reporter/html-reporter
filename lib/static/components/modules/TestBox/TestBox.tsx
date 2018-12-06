import * as React from 'react';
import cn from 'classnames';

import Header from './Header';
import Feature from './Feature';

import { TestBoxProps, TestBoxState } from 'src/components/modules/TestBox/types';

class TestBox extends React.PureComponent<TestBoxProps, TestBoxState> {
  public state = {
    isOpen: true,
  };

  public toggleBox = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }), this.props.onToggle);
  }

  public getSuite = (suitePath) => suitePath.join(' / ');

  public renderFeatures = (): any => {
    const { data } = this.props;

    return data.browsers.map((item, id) => <Feature onToggle={this.props.onToggle} key={id} data={item} />);
  }

  public render(): JSX.Element {
    const { data, style, className } = this.props;
    const { isOpen } = this.state;

    const suite = this.getSuite(data.suitePath);
    const cnTestBox = cn('Box mb-3', className);

    return (
      <div style={style}>
        <div className={cnTestBox}>
          <Header
            title={suite}
            status={data.status}
            isOpenedBox={isOpen}
            onToggle={this.toggleBox}
          />
          {isOpen && this.renderFeatures()}
        </div>
      </div>
    );
  }
}

export default TestBox;
