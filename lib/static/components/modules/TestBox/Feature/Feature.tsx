import * as React from 'react';

import Viewer from './Viewer';
import Header from './Header';

import { FeatureProps, FeatureState } from './types';
import { withMeasurer } from 'src/components/modules/TestBox/withMeasurer';

// TODO: вынести функциионал по аккордеону в отдельную компоненту
class Feature extends React.PureComponent<FeatureProps, FeatureState> {
  public state = {
    isOpen: false,
  };

  public componentDidMount(): void {
    const { data } = this.props;

    this.setState({
      isOpen: data.result.status === 'fail',
    }, this.props.measure);
  }

  public toggleFeature = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }), this.props.measure);
  }

  public render(): JSX.Element {
    const { data } = this.props;
    const { isOpen } = this.state;
    const { name, result } = data;
    const typeViewer = data.result.imagesInfo.length > 0 ? 'screenshot' : 'tests';

    return (
      <div className={'Box-row p-0'}>
        <Header
          data={data}
          title={name}
          isOpenedFeature={isOpen}
          status={result.status}
          onToggle={this.toggleFeature}
        />
        {isOpen && <Viewer type={typeViewer} {...data} />}
      </div>
    );
  }
}

export default withMeasurer(Feature);
