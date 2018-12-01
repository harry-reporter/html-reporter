import * as React from 'react';

import Viewer from './Viewer';
import Header from './Header';

import { FeatureProps, FeatureState } from './types';
import ScreenshotViewer from './Viewer/ScreenshotViewer';
import BoxViewAsserts from './Viewer/BoxViewAsserts/BoxViewAsserts';
import BoxViewError from './Viewer/BoxViewError/BoxViewError';

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
    console.log(data);
    return (
      <div className={'Box'}>
        <Header
          p={3}
          data={data}
          title={name}
          isOpenedFeature={isOpen}
          status={data.status}
          onToggle={this.toggleFeature}
        />
        {isOpen && <Viewer type={'code'} />}
      </div>
    );
  }
}
export interface IViewAssertsProps {
  className?: string;
  stateName: string;
  refImagePath: string;
  status: 'success' | 'fail' | 'error';
  actualPath?: string;
  expectedPath: string;
  diffPath?: string;
  types?: 'viewAsserts' | 'files' | 'code' | 'error';
  imagesInfo?: IViewAssertsProps[];
  imageInfo?: IViewAssertsProps;
  image?: any;
  reason?: {
    message: string;
    stack: string;
  };
}

export interface IBoxView {
  className: string;
  types?: 'viewAsserts' | 'files' | 'code' | 'error';
  imagesInfo?: IViewAssertsProps[];
  imageInfo?: IViewAssertsProps;
  message?: string;
  stack?: string;
  image?: any;
}

export default Feature;
