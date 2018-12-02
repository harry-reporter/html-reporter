import * as React from 'react';

import Viewer from './Viewer';
import Header from './Header';

import { FeatureProps, FeatureState } from './types';
import ScreenshotViewer from './Viewer/ScreenshotViewer';

// TODO: вынести функциионал по аккордеону в отдельную компоненту
class Feature extends React.Component<FeatureProps, FeatureState> {
  public state = {
    isOpen: true,
  };

  public componentDidMount(): void {
    const { data } = this.props;

    this.setState({
      isOpen: data.status === 'fail',
    });
  }

  public toggleFeature = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  public render(): JSX.Element {
    const { data } = this.props;
    const { isOpen } = this.state;
    const { name } = data;
    return (
      <div className={'Box'}>
        <Header
          p={3}
          data={data}
          title={name}
          isOpenedFeature={isOpen}
          status={data.result.status}
          onToggle={this.toggleFeature}
        />
        {isOpen && <Viewer type={data.result.imagesInfo.length > 0 ? 'screenshot' : 'test'} {...data} />}
      </div>
    );
  }
}

export default Feature;
