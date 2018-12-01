import * as React from 'react';

import Viewer from './Viewer';
import Header from './Header';

import { FeatureProps, FeatureState } from './types';

// TODO: вынести функциионал по аккордеону в отдельную компоненту
class Feature extends React.Component<FeatureProps, FeatureState> {
  public state = {
    isOpen: true,
  };

  public toggleFeature = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  public render(): JSX.Element {
    const { data } = this.props;
    const { isOpen } = this.state;

    return (
      <div className={'Box'}>
        <Header
          p={3}
          data={data}
          title={data.title}
          isOpenedFeature={isOpen}
          status={data.status}
          onToggle={this.toggleFeature}
        />
        {isOpen && <Viewer type={'code'} />}
      </div>
    );
  }
}

export default Feature;
