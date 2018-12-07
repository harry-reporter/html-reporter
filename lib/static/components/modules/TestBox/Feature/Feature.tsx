import * as React from 'react';

import Viewer from './Viewer';
import Header from './Header';

import { FeatureProps, FeatureState } from './types';

// TODO: вынести функциионал по аккордеону в отдельную компоненту
class Feature extends React.Component<FeatureProps, FeatureState> {
  public state = {
    isOpen: true,
    viewType: 'screenshot',
    viewData: this.props.data.result,
    pageCount: this.props.data.result.attempt,
    pageCurrent: this.props.data.result.attempt,
  };

  public componentDidMount(): void {
    const { data } = this.props;
    this.setState({
      isOpen: this.state.viewData.status === 'fail',
    });
  }

  public toggleFeature = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  public handleViewChange = (e) => {
    this.setState({ viewType: e });
  }

  public handleDataChange = (e) => {
    if (e === this.state.pageCount) {
      this.setState({ pageCurrent: e, viewData: this.props.data.result });
    } else {
      this.setState({ pageCurrent: e, viewData: this.props.data.retries[e] });
    }
  }

  public render(): JSX.Element {
    const { name } = this.props.data;
    const { status } = this.state.viewData.status;
    const { viewType, pageCurrent, pageCount, viewData, isOpen } = this.state;
    return (
      <div className={'Box-row p-0'}>
        <Header
          data={viewData}
          title={name}
          isOpenedFeature={isOpen}
          status={status}
          onToggle={this.toggleFeature}
          handleViewChange={this.handleViewChange}
          viewType={viewType}
          handleDataChange={this.handleDataChange}
          pageCurrent={pageCurrent}
          pageCount={pageCount}
        />
        {isOpen && <Viewer type={viewType} {...viewData} />}
      </div>
    );
  }
}

export default Feature;
