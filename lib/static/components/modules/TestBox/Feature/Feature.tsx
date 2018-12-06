import * as React from 'react';

import Viewer from './Viewer';
import Header from './Header';

import { FeatureProps, FeatureState } from './types';

// TODO: вынести функциионал по аккордеону в отдельную компоненту
class Feature extends React.PureComponent<FeatureProps, FeatureState> {
  public state = {
    isOpen: false,
  };

  public componentDidMount(): void {
    const { data } = this.props;

    this.setState({
      isOpen: data.result.status === 'fail',
    }, this.props.onToggle);
  }

  public toggleFeature = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }), this.props.onToggle);
  }

  public render(): JSX.Element {
    const { data } = this.props;
    const { isOpen } = this.state;
    const { name, result } = data;

    return (
      <div className={'Box-row p-0'}>
        <Header
          data={data}
          title={name}
          isOpenedFeature={isOpen}
          status={result.status}
          onToggle={this.toggleFeature}
        />
        {isOpen && <Viewer onToggle={this.props.onToggle} type={data.result.imagesInfo.length > 0 ? 'screenshot' : 'tests'} {...data} />}
      </div>
    );
  }
}

export default Feature;
